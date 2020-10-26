// mongodb+srv://damigreen:<password>@cluster0.6pe6n.mongodb.net/<dbname>?retryWrites=true&w=majority

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./utils/config')

const url = config.MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to mongoDB'))
  .catch(err => console.log(`error connecting to the DB: ${err.message}`))

app.use(bodyParser.json());
app.use(express.static('build'));

module.exports = app;
