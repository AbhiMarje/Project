const users = require("../../Models/User");
const shortid = require('shortid');
const bcrypt = require('bcrypt');

exports.getUser = async (req, res) => {
    try {
        const id = req.query.id;

        if (!id) {
            res.status(400).send({err: "Please enter a user ID."});
        } else {

            const user = await users.findOne({ _id: id });
          
            if (!user) {
                res.status(404).send({err: 'User not found'});
            } else {
                res.status(200).send({message: user});
            }
        }

    } catch (error) {
        res.status(400).send({err: error.message})
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.query;

        if (!email || !password) {
            res.status(400).send({err: "Please enter all fields."});
        } else {
            
            const user = await users.findOne({ email: email });

            if (!user) {
                res.status(404).send({err: 'User not found'});
            } else {

                bcrypt.compare(password, user.password, (err, isMatch) => {

                    if (err) {
                        res.status(400).send({err: err.message});
                    } else if (isMatch) {
                        res.status(200).send({message: "Login Successfull"});
                    } else if (!isMatch) {
                        res.status(400).send({err: 'Incorrect password'});
                    }
                })
            }
        }

    } catch (error) {
        res.status(400).send({err: error.message})
    }
}

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password, phnNo, age, gender } = req.body;

        if (!name ||!email ||!password ||!phnNo ||!age ||!gender) {
            res.status(400).send({err: "Please enter all fields."});
        } else {

            const user = await users.findOne({email: email});

            if (user) {
                res.status(400).send({err: 'User already exists'});
            } else {
                
                bcrypt.hash(password, 10, async (err, hash) => {

                    if (err) {
                        res.status(400).send({err: err.message});
                    } else {
                        const newUser = new users({
                            _id: shortid.generate(),
                            name: name,
                            email: email,
                            password: hash,
                            phnNo: phnNo,
                            age: age,
                            gender: gender
                        });
    
                        await newUser.save();

                        res.status(200).send({message: "User created successfully."});
                    }
                })
    
            }
        }

            
    } catch (error) {
        res.status(400).send({err: error.message})
    }
}