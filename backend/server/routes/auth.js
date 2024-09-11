// server/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/Customer'); // Assuming you have a User model in the models folder
const bcrypt = require('bcrypt');
// Example login route
router.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    // Add your logic for checking user credentials
    if (email === "test@test.com" && password === "password") {
        res.status(200).json({ message: 'Login successful', user: { email } });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});
router.post('/Signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create new user and hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ name, email, password: hashedPassword });
  
      // Save user to DB
      await user.save();
  
      res.status(201).json({ message: 'Account created successfully!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  

module.exports = router;
