const feedback = require('../models/feedbacks');

module.exports = class feedbackAPI {
  static async getAllfeedbacks(req, res) {
    try {
      const feedbacks = await feedback.find();
      res.status(200).json(feedbacks);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async getfeedbackById(req, res) {
    const id = req.params.id;
    try {
      const obtainedfeedback = await feedback.findById(id);
      res.status(200).json(obtainedfeedback);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async createfeedback(req, res) {
    const newfeedback = req.body;
    try {
      await feedback.create(newfeedback);
      res.status(200).json({ message: 'Create feedback successfully!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  static async updatefeedback(req, res) {
    const id = req.params.id;
    const newfeedback = req.body;
    try {
      await feedback.findByIdAndUpdate(id, newfeedback);
      res.status(200).json({ message: 'feedback updated successfully!' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  static async deletefeedback(req, res) {
    const id = req.params.id;
    try {
      const result = await feedback.findByIdAndDelete(id);
      res.status(200).json({ message: 'feedback deleted successfully!' });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
}