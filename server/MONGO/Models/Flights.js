const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
    flNo: {
        type: String,
        required: true
    }, 
    flName: {
        type: String,
        required: true
    },
    flDate: {
        type: Date,
        required: true
    },
    fromCity: {
        type: String,
        required: true
    },
    boardPoint: {
        type: String,
        required: true
    },
    toCity: {
        type: String,
        required: true
    },
    destPoint: {
        type: String,
        required: true
    },
    boardTime: {
        type: Date,
        required: true
    },
    destTime: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    totSeats: {
        type: Number,
        required: true
    },
    bookedSeats: {
        type: Number,
        required: true
    }

});

const flights = mongoose.model('flights', flightsSchema);

module.exports = flights;