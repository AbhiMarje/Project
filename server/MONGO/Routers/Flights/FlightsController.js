const flights = require('../../models/Flights');
const flightInfo = require('../../models/FlightInfo');

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

            const flightData = await flightInfo.findOne({flNo: flNo});

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

exports.addFlightInfo = async (req, res) => {
    try {
        const { flNo, flName, classes, totSeats, bookedSeats, services } = req.body;

        if (!flNo ||!flName ||!classes ||!totSeats ||!bookedSeats ||!services) {
            res.status(400).send({err: 'Please provide all details!'});
        } else {

            const flight = await flightInfo.findOne({ flNo: flNo })

            if (flight) {
                res.status(400).send({err: 'Flight already exists!'});
            } else {
                const newFlight = new flightInfo({
                    flNo: flNo,
                    flName: flName,
                    classes: classes,
                    totSeats: totSeats,
                    bookedSeats: bookedSeats,
                    services: services
                })

                await newFlight.save();
                
                res.status(200).send({ message: "Flight added successfully." })
            }
        }
        
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
}

exports.addFlight = async (req, res) => {
    try {
        const { flNo, flName, flDate, fromCity, boardPoint, toCity, destPoint, boardTime, destTime, price, totSeats, bookedSeats }  = req.body;

        if (!flNo ||!flName ||!flDate ||!fromCity ||!boardPoint ||!toCity ||!destPoint ||!boardTime ||!destTime ||!price ||!totSeats ||!bookedSeats) {
            res.status(400).send({err: 'Please provide all details!'});
        } else {

            const flight = await flightInfo.findOne({ flNo: flNo }); 

            if (!flight) {
                res.status(404).send({ err: 'No flight data found!, Please enter the flight information first.'});
            } else {

                const newFlight = new flights({
                    flNo: flNo,
                    flName: flName,
                    flDate: new Date(flDate),
                    fromCity: fromCity,
                    boardPoint: boardPoint,
                    toCity: toCity,
                    destPoint: destPoint,
                    boardTime: new Date(boardTime),
                    destTime: new Date(destTime),
                    price: price,
                    totSeats: totSeats,
                    bookedSeats: bookedSeats
                })

                await newFlight.save();

                res.status(200).send({ message: "Flight added successfully." })
            }
        }

    } catch (error) {
        res.status(400).send({ err: error.message });
    }
}

exports.deleteFlight = async (req, res) => {
    try {
        const { flNo } = req.query;

        if (!flNo) {
            res.status(400).send({err: 'Please provide Flight no.!'});
        } else {

            const flight = await flights.findOne({ flNo: flNo });

            if (!flight) {
                res.status(404).send({ err: 'No flight found!'});
            } else {

                await flights.deleteOne({ flNo: flNo });
                res.status(200).send({ message: "Flight deleted successfully." })
            }
        }
        
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
}

exports.deleteFlightInfo = async (req, res) => {
    try {
        const { flNo } = req.query;

        if (!flNo) {
            res.status(400).send({err: 'Please provide Flight no.!'});
        } else {

            const flight = await flightInfo.findOne({ flNo: flNo });

            if (!flight) {
                res.status(404).send({ err: 'No flight found!'});
            } else {
                
                await flightInfo.deleteOne({ flNo: flNo });
                res.status(200).send({ message: "Flight deleted successfully." })
            
            }
        }
            
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
}

exports.updateFlight = async (req, res) => {
    try {
        const { flNo, flName, flDate, fromCity, boardPoint, toCity, destPoint, boardTime, destTime, price, totSeats, bookedSeats } = req.body;

        if (!flNo || !flName || !flDate || !fromCity || !boardPoint || !toCity || !destPoint || !boardTime || !destTime || !price || !totSeats || !bookedSeats) {
            res.status(400).send({err: 'Please provide all details!'});
        } else {
            
            const flight = await flights.findOneAndUpdate({ flNo: flNo }, {flNo: flNo, flName: flName, flDate: flDate, fromCity: fromCity, boardPoint: boardPoint, 
                toCity: toCity, destPoint: destPoint, boardTime: boardTime, destTime: destTime, price: price, totSeats: totSeats, bookedSeats: bookedSeats});

            if (!flight) {
                res.status(404).send({ err: 'No flight found!'});
            } else {
                res.status(200).send({ message: "Flight updated successfully." })
            }
        }
        
    } catch (error) {
        res.status(400).send({ err: error.message });
    }
}