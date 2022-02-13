const newsletter = require('../models/newsletters');

module.exports = class newsletterAPI {
  static async getAllNewsletters(req, res) {
    try {
      const newsletters = await newsletter.find();
      res.status(200).json(newsletters);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async getNewsletterById(req, res) {
    const id = req.params.id;
    try {
      const obtainednewsletter = await newsletter.findById(id);
      res.status(200).json(obtainednewsletter);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async createNewsletter(req, res) {
    const newnewsletter = req.body;
    try {
      await newsletter.create(newnewsletter);
      res.status(200).json({ message: 'Create newsletter successfully!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static async updateNewsletter(req, res) {
    const id = req.params.id;
    const newnewsletter = req.body;
    try {
      await newsletter.findByIdAndUpdate(id, newnewsletter);
      res.status(200).json({ message: 'newsletter updated successfully!' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async deleteNewsletter(req, res) {
    const id = req.params.id;
    try {
      const result = await newsletter.findByIdAndDelete(id);
      res.status(200).json({ message: 'newsletter deleted successfully!' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
}