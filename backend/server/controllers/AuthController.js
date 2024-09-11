// const User = require('../models/User');
const bcrypt = require('bcrypt');

// Signup Controller
exports.signup = async (req, res) => {
  const { Name, Email, Password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password before saving to DB
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Create a new user
    const newUser = new User({
      Name,
      Email,
      Password: hashedPassword,
      Phone,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error during user signup:', error);
    res.status(500).json({ message: 'Server error during signup' });
  }
};
