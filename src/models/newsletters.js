const mongoose = require('mongoose');

const newsletterSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true
  }
});

const newsletter = mongoose.model('newsletter', newsletterSchema);

module.exports = newsletter;