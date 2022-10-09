// routes/api/users.js

const express = require('express');
const router = express.Router();

const MongoClient = require("mongodb").MongoClient;
// switch this with the ENV variable
const uri = "mongodb+srv://tarova:jojothecat@cluster0.wy7ka4m.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

// @route GET/POST /createUserAPI/test
// @description tests route
// @access Public
router.get('/test', (req, res) => res.send('Hello tester!! :)'));
router.post('/test', (req, res) => res.send('Hello tester!! :)'));

// @route POST /createUser
// @description create user
// @access Public
// todo: consider adding email to the user
router.post('/', (req, res) => {
    const user_Name = req.body.userName;
    const user_Password = req.body.password;

    if(user_Name === "" || user_Password === ""){
        res.send("Username or password cannot be empty");
        res.status(401)
        return;
    }

    async function run() {
        try {
            await client.connect();
            const database = client.db("Budget_app");
            const users = database.collection("Users");

            // Query for a user
            const query = { userName: user_Name, password: user_Password };
            await users.insertOne(query);
            
            res.send('User created successfully');
            res.status(200);
        } finally {
            await client.close();
        }
    }

    run().catch(console.dir);
});

module.exports = router;
    
