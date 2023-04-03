const bookings = require('../../Models/Bookings');
const flightInfo = require('../../models/FlightInfo');
const shortid = require('shortid');

exports.getBookings = async (req, res) => {
    try {

        const { userId } = req.query;

        if (!userId) {
            res.status(400).json({ err: 'User id is required' });
        } else {

            const data = await bookings.findOne({ userId: userId });

            if (!data) {
                res.status(404).json({ err: 'User not found' });
            } else {
                res.status(200).json({ messaage: data });
            }

        }
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
}

exports.bookFlight = async (req, res) => {
    try {

        console.log(req.body);

        const { tDate, userId, seatNo, flNo, price, status } = req.body;

        if (!tDate || !userId || !seatNo || !flNo || !price || !status) {
            res.status(400).json({ err: 'All fields are required' });
        } else {

            const book = new bookings({
                transNo: shortid.generate(),
                tDate: tDate,
                userId: userId,
                seatNo: seatNo,
                flNo: flNo,
                price: price,
                status: status
            })

            const data = await flightInfo.findOne({flNo: flNo});
            if (!data) {
                res.status(404).json({ err: 'Flight not found' });
            } else {
                
                data.bookedSeats.push(seatNo);

                const update = await flightInfo.updateOne({flNo: flNo}, {bookedSeats: data.bookedSeats});

                if (update.modifiedCount > 0) {
                    await book.save();
                    res.status(200).json({ message: "Flight booked successfully!" });
                } else {
                    res.status(404).json({ err: 'Flight not found' });
                }

            }
        }
        
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
}