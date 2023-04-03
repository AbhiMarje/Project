const express = require('express');
const router = express.Router();

const bookingsController = require('./BookingsController.js')

router.post('/api/auth/bookFlight', bookingsController.bookFlight);

router.get('/api/auth/getBookings', bookingsController.getBookings);

module.exports = router;