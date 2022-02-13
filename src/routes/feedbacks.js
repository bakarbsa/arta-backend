const express = require('express');
const feedbackAPI = require('../controllers/feedbacks');

const router = express.Router();

router.get('/', feedbackAPI.getAllfeedbacks);
router.get('/:id', feedbackAPI.getfeedbackById);
router.post('/', feedbackAPI.createfeedback);
router.patch('/:id', feedbackAPI.updatefeedback);
router.delete('/:id', feedbackAPI.deletefeedback);

module.exports = router;