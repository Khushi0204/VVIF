const express = require('express');
const router = express.Router(); // Use this if you're creating a separate router file, e.g., customer.js

// This route will handle the form submission
router.post('/add', (req, res) => {
  const { firstName, lastName, Phone, email, details } = req.body;

  // Here, you can save the form data to your database
  // For example, using Mongoose (assuming you're using MongoDB)
  // const newCustomer = new Customer({ firstName, lastName, tel, email, details });
  // newCustomer.save();

  console.log(`Customer Info: ${firstName}, ${lastName}, ${Phone}, ${email}, ${details}`);

  // After processing, redirect or send a response
  res.redirect('/'); // Redirect to a page after submission
});

module.exports = router; // Export this if you're using separate route files
