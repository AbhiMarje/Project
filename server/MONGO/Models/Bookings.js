const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    transNo: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }, 
    tDate: {
        type: Date,
        required: true
    },
    flNo: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    seatNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;