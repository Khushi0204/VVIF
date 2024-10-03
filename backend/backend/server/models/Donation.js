const mongoose = require('mongoose');



// Define the UserDonation schema
const UserDonationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  orderId: {
    type: String,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

// Create the model
const UserDonation = mongoose.model('UserDonation', UserDonationSchema);

module.exports = { UserDonation };
