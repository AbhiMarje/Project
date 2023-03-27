const mongoose = require('mongoose');

const flightInfoSchema = new mongoose.Schema({
    flNo: {
        type: String,
        required: true
    },
    flName: {
        type: String,
        required: true
    },
    classes: {
        type: [String],
        required: true
    },
    totSeats: {
        type: [Number],
        required: true
    },
    bookedSeats: {
        type: [String],
        required: true
    },
    services: {
        type: [String],
        required: true
    }
})

const flightInfo = mongoose.model('flightinfos', flightInfoSchema);

module.exports = flightInfo;