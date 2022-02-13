const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

const articleRoutes = require('./routes/articles');
const feedbackRoutes = require('./routes/feedbacks');
const newsletterRoutes = require('./routes/newsletters');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

dotenv.config();

app.use(express.static('public'));
app.use('/article', articleRoutes);
app.use('/feedback', feedbackRoutes);
app.use('/newsletter', newsletterRoutes);

app.listen(process.env.PORT || 5000, () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(console.log('Connected to database'))
    .catch((err) => console.log(err))
});