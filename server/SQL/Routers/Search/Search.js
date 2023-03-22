const sql = require('../connection.js');
const express = require('express');
const router = express.Router();

router.get('/api/getCity', (req, res) => {
    try {
        const { city } = req.query;

        if (!city) {
            res.status(400).send({err: 'Please provide a city!'});
        } else {
            sql.query(`SELECT fromCity FROM city WHERE city = '${city}'`, (err, result) => {
                if (err) {
                    res.status(400).send({err: 'Something went wrong please try again!'});
                } else {
                    res.status(200).send(result);
                }
            });
        }

    } catch (error) {
        res.status(400).send({err: 'Something went wrong please try again!'});
    }
});