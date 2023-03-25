const express = require('express');
const router = express.Router();

const searchController = require('./FlightsController');

router.get('/api/auth/getFlights', searchController.getFlights);

router.get('/api/auth/getFlightInfo', searchController.getFlightInfo);

module.exports = router;