const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  author: {
    type: String,
    default: 'Anonymous'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  views: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: 'image.png'
  },
  content: {
    type: String,
    required: true
  }
})

const article = mongoose.model('article', articleSchema);

module.exports = article;