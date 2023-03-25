const flights = require('../../models/Flights');

exports.getFlights =  async (req, res) => {
    try {
        const { fromCity, toCity, flDate } = req.query;

        if (!fromCity || !toCity || !flDate) {
            res.status(400).send({err: 'Please provide all details!'});
        } else {
           
            const flightsData = await flights.find({fromCity: fromCity, toCity: toCity, flDate: new Date(flDate)});
            
            if(!flightsData[0]) {
                res.status(404).send({ err: 'No flights found!'});
            } else {
                res.status(200).send({ message: flightsData });
            }
        }

    } catch (error) {
        res.status(400).send({ err: error.message });
    }
};

exports.getFlightInfo = async (req, res) => {
    try {
        const { flNo } = req.query;

        if (!flNo) {
            res.status(400).send({err: 'Please provide Flight no.!'});
        } else {

            const flightData = await flights.findOne({flNo: flNo});

                if(!flightData) {
                    res.status(404).send({ err: 'No flight found!'});
                } else {
                    res.status(200).send({ message: flightData });
                }
        }
        
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
};

