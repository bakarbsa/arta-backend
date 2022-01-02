const express = require('express');
const article = require('../models/articles');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const articleList = await article.find();
    if(!articleList) throw new Error('Article not found');
    res.status(200).json(articleList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const newArticle = new article(req.body);
  try {
    const articleList = await newArticle.save();
    if(!articleList) throw Error('Something went wrong saving the article.');
    res.status(200).json(articleList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await article.findByIdAndUpdate(id, req.body);
    if(!response) throw Error('Something went wrong');
    const updated = { ...response._doc, ...req.body };
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await article.findByIdAndDelete(id);
    if(!removed) throw Error('Something went wrong');
    res.status(200).json(removed);
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
});

module.exports = router;