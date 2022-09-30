// app.js

const express = require('express');
const connectDB = require('./api/config/db');
const userRoute = require('./api/routes/users');

const app = express();

app.use('/api/users/tests', userRoute);

connectDB();
app.get('/', (req, res) => res.send('Hello world!'));

//app.get('/routes/api/users', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));