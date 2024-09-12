require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require("razorpay");
const crypto = require("crypto");



const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');

// npm uninstall express-flash-message
//const { flash } = require('express-flash-message');

// npm install connect-flash
const flash = require('connect-flash');

const session = require('express-session');
const connectDB = require('./server/config/db');

const app = express();
const port = process.env.PORT || 3000;

// Connect to Database  
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(cors({
  origin: 'http://vishwakarmavansajfederation.com',  // Replace with your frontend's URL
}));
app.use(bodyParser.json());

// Static Files
app.use(express.static('public'));

// Express Session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    }
  })
);


// Flash Messages
app.use(flash({ sessionKeyName: 'flashMessage' }));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/customer'))

// Handle 404
app.get('*', (req, res) => {
  res.status(404).render('404');
});

app.post("/Donate", async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error");
  }
});

app.post("/Donate/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  //order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }

  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

const authRoutes = require('./server/routes/auth');
app.use('/api', authRoutes);

app.listen(port, ()=> {
  console.log(`App listeing on port ${port}`)
});
