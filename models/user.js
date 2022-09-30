// models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
      },
    password: {
        type: String,
        required: true
        },
    userId: {
        type: Int32Array,
        required: true
        },
    _id: {
        type: Object,
        required: true
        }
});