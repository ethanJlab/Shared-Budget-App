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
        type: Int64,
        required: true
        },
    _id: {
        type: ObjectId,
        required: true
        }
});