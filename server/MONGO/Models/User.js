const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    }, 
    name: { 
        type: String, 
        required: true
    },
    phnNo: {
        type: Number,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }, 
    gender: {
        type: String,
        required: true
    }
})

const users = mongoose.model('users', usersSchema);

module.exports = users;