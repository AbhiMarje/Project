const express = require('express');
const router = express.Router();

const flightsController = require('./FlightsController');

router.get('/api/auth/getFlights', flightsController.getFlights);

router.get('/api/auth/getFlightInfo', flightsController.getFlightInfo);

router.post('/api/auth/addFlightInfo', flightsController.addFlightInfo);

router.post('/api/auth/addFlight', flightsController.addFlight);

router.delete('/api/auth/deleteFlight', flightsController.deleteFlight);

router.delete('/api/auth/deleteFlightInfo', flightsController.deleteFlightInfo);

router.put('/api/auth/updateFlight', flightsController.updateFlight);

module.exports = router;