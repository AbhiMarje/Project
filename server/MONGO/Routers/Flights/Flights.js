const express = require('express');
const router = express.Router();

const searchController = require('./FlightsController');

router.get('/api/auth/getFlights', searchController.getFlights);

router.get('/api/auth/getFlightInfo', searchController.getFlightInfo);

router.post('/api/auth/addFlightInfo', searchController.addFlightInfo);

router.post('/api/auth/addFlight', searchController.addFlight);

router.delete('/api/auth/deleteFlight', searchController.deleteFlight);

router.delete('/api/auth/deleteFlightInfo', searchController.deleteFlightInfo);

router.put('/api/auth/updateFlight', searchController.updateFlight);

module.exports = router;