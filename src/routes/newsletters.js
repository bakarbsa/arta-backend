const express = require('express');
const newsletterAPI = require('../controllers/newsletters');

const router = express.Router();

router.get('/', newsletterAPI.getAllNewsletters);
router.get('/:id', newsletterAPI.getNewsletterById);
router.post('/', newsletterAPI.createNewsletter);
router.patch('/:id', newsletterAPI.updateNewsletter);
router.delete('/:id', newsletterAPI.deleteNewsletter);

module.exports = router;