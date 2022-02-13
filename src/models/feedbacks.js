const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  messages: {
    type: String,
    required: true
  }
});

const feedback = mongoose.model('feedback', feedbackSchema);

module.exports = feedback;