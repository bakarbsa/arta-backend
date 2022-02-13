const article = require('../models/articles');

module.exports = class articleAPI {
  static async getAllArticles(req, res) {
    try {
      const articles = await article.find();
      res.status(200).json(articles);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async getArticleById(req, res) {
    const id = req.params.id;
    try {
      const obtainedarticle = await article.findById(id);
      res.status(200).json(obtainedarticle);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async createArticle(req, res) {
    const newarticle = req.body;
    try {
      await article.create(newarticle);
      const finalImgUrl = req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename;
      res.status(200).json({ message: 'Create article successfully!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static async updateArticle(req, res) {
    const id = req.params.id;
    const newarticle = req.body;
    try {
      await article.findByIdAndUpdate(id, newarticle);
      res.status(200).json({ message: 'article updated successfully!' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async deleteArticle(req, res) {
    const id = req.params.id;
    try {
      const result = await article.findByIdAndDelete(id);
      res.status(200).json({ message: 'article deleted successfully!' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
}