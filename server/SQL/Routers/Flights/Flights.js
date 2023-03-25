const sql = require('../connection.js');
const express = require('express');
const router = express.Router();

router.get('/api/getFlights', async (req, res) => {
    try {
        const { fromCity, toCity, flDate } = req.query;

        if (!fromCity || !toCity || !flDate) {
            res.status(400).send({err: 'Please provide all details!'});
        } else {
            await sql.query(`SELECT * FROM flights WHERE LOWER(fromCity) = '${fromCity}' and LOWER(toCity) = '${toCity}' and (flDate) = '${flDate}'`, (err, data) => {
                if (err) {
                    res.status(400).send({ err: 'Something went wrong please try again!'});
                } else if(!data[0]) {
                    res.status(404).send({ err: 'No flights found!'});
                } else {
                    res.status(200).send({ message: data });
                }
            });
        }

    } catch (error) {
        res.status(400).send({ err: 'Something went wrong please try again!' });
    }
});

router.get('/api/getFlightInfo', async (req, res) => {
    try {
        const { flNo } = req.query;

        if (!flNo) {
            res.status(400).send({err: 'Please provide Flight no.!'});
        } else {
            await sql.query(`SELECT * FROM flightInfo WHERE flNo = '${flNo}'`, (err, data) => {
                if (err) {
                    res.status(400).send({ err: 'Something went wrong please try again!'});
                } else if(!data[0]) {
                    res.status(404).send({ err: 'No flights found!'});
                } else {
                    res.status(200).send({ message: data });
                }
            });
        }
        
    } catch (error) {
        res.status(400).send({ err: 'Something went wrong please try again!' });
    }
});


module.exports = router;