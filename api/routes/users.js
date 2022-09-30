// routes/api/users.js

const express = require('express');
const router = express.Router();

const MongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://tarova:jojothecat@cluster0.wy7ka4m.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);



//const user = require('../../models/user');

// @route GET /users/test
// @description tests route
// @access Public
router.get('/test', (req, res) => res.send('route testing!'));

// @route GET /users/getAllUsers
// @description get all users
// @access Public
router.get('/getAllUsers', (req, res) => {
    async function run() {
        var users = [];
        try {
            const database = client.db("Budget_app");
            const users = database.collection("Users");
            
            // Query for all users
            const query = {};
            const cursor = users.find(query);
            
             usercursor.toArray();


        } finally {
            await client.close();
        }
        return users;
    }
    res.send(run());
});

module.exports = router;


//mongodb+srv://tarova:<password>@cluster0.wy7ka4m.mongodb.net/?retryWrites=true&w=majority