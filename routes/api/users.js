// routes/api/users.js

const express = require('express');
const router = express.Router();

const user = require('../../models/user');

// @route GET api/users/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('book route testing!'));

module.exports = router;