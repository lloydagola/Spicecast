const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const podcastRouter = require('./routes/podcasts');
const episodeRouter = require('./routes/episodes');

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/spicecast", {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("database connected...")
});


const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); 

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/podcasts', podcastRouter);
app.use('/api/episodes', episodeRouter);


//set static folder
app.use(express.static(path.join(__dirname, 'client', '/build')));
app.use(express.static(path.join(__dirname, '/public')));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', "build", 'index.html'));
});

module.exports = app;
