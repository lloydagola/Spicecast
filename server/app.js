const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const podcastRouter = require('./routes/podcasts');

const mongoose = require("mongoose")

mongoose
.connect("mongodb://localhost:27017/Spicecast", {useNewUrlParser:true})
.catch(error => console.log(error));

const mongooseConnection = mongoose.connection;
mongooseConnection.on("error", error => console.log("An error occurred while attempting to connect to the databse..."));
mongooseConnection.once("connected", () => console.log("Database connected..."));  

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/podcasts", podcastRouter)
app.use('/users', usersRouter);

module.exports = app;
