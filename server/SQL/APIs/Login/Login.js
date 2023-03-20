const sql = require('../connection.js');
const express = require('express');
const router = express.Router();

router.get("/api/getUser", async (req, res) => {
    try {
        const { id } = req.body;
        if (!id) {
            res.status(400).send({err: 'Please provide user ID'});
        } else {

            await sql.query(`select * from users where userId = ${id}`, (err, data) => {
                if (err) {
                    res.status(400).send({err: 'Something went wrong!'});
                } else if (!data[0]) {
                    res.status(400).send({err: 'User not found'});
                } else {
                    res.status(200).send({message: data});
                }
            });
        }

    } catch (error) {
        res.status(400).json({err: 'Something went wrong please try again!'})
    }
})

router.get("/api/loginUser", async (req, res) => {
    try {
        const { email, pass } = req.body;
        if (!email || !pass) {
            res.status(400).send({err: 'Please provide email and password'});
        } else {

            await sql.query(`select email, password from users where email = '${email}' `, (err, data) => {
                if (err) {
                    res.status(400).send({err: 'Something went wrong!'});
                } else if (!data[0]) {
                    res.status(404).send({err: 'User not found'});
                } else {
                    if (data[0].password === pass) {
                        res.status(200).send({message: "Login Successful!"})
                    } else {
                        res.status(400).send({err: 'Incorrect Password'})
                    }
                }
            })
        }
        
    } catch (error) {
        res.status(400).json({err: 'Something went wrong please try again!'})
    }

})

router.post("/api/registerUser", async (req, res) => {
    try {
        const { id, name, phnNo, email, password, age, gender } = req.body;

        if (!id || !name || !phnNo || !email || !password || !age || !gender) {
            res.status(400).send({err: "Please fill all the details"});
        } else {

            await sql.query(`insert into users values(${id}, '${name}', ${phnNo}, '${email}', '${password}', ${age}, '${gender}')`, (err, data) => {
                if (err) {
                    res.status(400).send({err: 'Something went wrong!'});
                }  else {
                    res.send({message: data})
                }
            })
        }
        
    } catch (error) {
        res.status(400).json({err: 'Something went wrong please try again!'})
    }
})

module.exports = router;