// routes/api/users.js

const express = require('express');
const { resource } = require('../app');
const router = express.Router();

const MongoClient = require("mongodb").MongoClient;
// switch this with the ENV variable
const uri = "mongodb+srv://tarova:jojothecat@cluster0.wy7ka4m.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

// @route GET /login/test
// @description tests route
// @access Public
router.get('/test', (req, res) => res.send('route testing!'));

// @route POST /login
// @description login user
// @access Public
router.post('/', (req, res) => {
    const user_Name = req.body.userName;
    const user_Password = req.body.password;

    async function run() {
        try {
            await client.connect();
            const database = client.db("Budget_app");
            const users = database.collection("Users");

            // Query for a user
            const query = { userName: user_Name, password: user_Password };
            const cursor = users.find(query);
            const user = await cursor.toArray();
            console.log(user);

            if (user.length === 0) {
                res.send("Invalid username or password");
                res.status(401);
            } else {
                res.send("Login Successful");
                res.status(200);
            }

        } finally {
            await client.close();
        }
    }

    run().catch(console.dir);
});

module.exports = router;