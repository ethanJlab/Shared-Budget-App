var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const connectDB = require('./config/db');

var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.use('/users', usersRouter);

connectDB();
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;