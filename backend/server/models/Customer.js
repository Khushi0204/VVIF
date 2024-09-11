const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
// const CustomerSchema = new Schema({
//   Name: {
//     type: String,
//     required: true
//   },
  
//   tel: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   details: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now()
//   }
// });

// module.exports = mongoose.model('Customer', CustomerSchema);

const customerSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
  Password: { type: String, required: true },
});

module.exports = mongoose.model('Customer', customerSchema);