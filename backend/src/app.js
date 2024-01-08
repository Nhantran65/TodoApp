const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

async function connectToMongoDB() {
  try {
    const apiURL = "mongodb+srv://tranhuynhdainhan:Baochau2903-@cluster0.ag2cn7s.mongodb.net/todoApp";

    // Check if running in test environment
    if (process.env.NODE_ENV !== 'test') {
      await mongoose.connect(apiURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

// Connect to MongoDB
connectToMongoDB();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
