const express = require('express');
const router = express.Router();

const users = require("../../Models/User");

router.get('/getUser', async (req, res) => {
    try {
        const id = req.query.userId;

        if (!id) {
            res.status(400).send({err: "Please enter a user ID."});
        } else {
            console.log(req.query.userId);
            const user = await users.findOne({ userId: id });
                if (!user) {
                    res.status(404).send({err: 'User not found'});
                } else {
                    res.status(200).send({message: user});
                }
        }

    } catch (error) {
        res.status(400).send({err: error.message})
    }
})

router.get('/loginUser', async (req, res) => {
    try {
        const { email, password } = req.query;

        if (!email || !password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const user = await users.findOne({ email: email });

            if (!user) {
                res.status(404).send({err: 'User not found'});
            } else {
                if (user.password === password) {
                    res.status(200).send({message: "Login Successfull"});
                } else {
                    res.status(404).send({err: 'Incorrect password'});
                }
            }
        }

    } catch (error) {
        res.status(400).send({err: "Something went wrong please try again"})
    }
})

router.post('/registerUser', async (req, res) => {
    try {
        const { userId, name, email, password, phnNo, age, gender } = req.body;

        console.log(req.body);

        if (!userId ||!name ||!email ||!password ||!phnNo ||!age ||!gender) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            const newUser = new users({
                userId: userId,
                name: name,
                email: email,
                password: password,
                phnNo: phnNo,
                age: age,
                gender: gender
            });

            await newUser.save();

            res.status(200).send({message: "User created successfully."});
        }
    } catch (error) {
        res.status(400).send({err: error})
    }
})

module.exports = router;