const express = require('express');
const multer = require('multer'); 
const articleAPI = require('../controllers/articles');

const router = express.Router();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if( file.mimetype === 'image/png' || 
      file.mimetype === 'image/jpg' || 
      file.mimetype === 'image/jpeg' ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: fileStorage, fileFilter: fileFilter }).single('image');

router.get('/', articleAPI.getAllArticles);
router.get('/:id', articleAPI.getArticleById);
router.post('/', upload, articleAPI.createArticle);
router.patch('/:id', upload, articleAPI.updateArticle);
router.delete('/:id', articleAPI.deleteArticle);

module.exports = router;