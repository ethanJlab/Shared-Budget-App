var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const connectDB = require('./config/db');

var usersRouter = require('./routes/users');
var loginAPIRouter = require('./routes/login');
var createUserAPIRouter = require('./routes/createUser');

var app = express();

app.use(express.json());

// view engine setup
app.use('/users', usersRouter);
app.use('/login', loginAPIRouter);
app.use('/createUser', createUserAPIRouter);

connectDB();
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;