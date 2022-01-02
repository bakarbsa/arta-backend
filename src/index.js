const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const multer = require('multer'); 

const articleRoutes = require('./routes/articles');

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toString() + '-' + file.originalname);
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


app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use('/article', articleRoutes);

app.listen(PORT, () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(console.log('Connected to database'))
    .catch((err) => console.log(err))
});