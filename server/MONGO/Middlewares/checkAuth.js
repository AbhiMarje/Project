require("dotenv").config({path: `../../config/.env.MONGO`});
const jwt = require('jsonwebtoken');

exports.validate = (req, res, next) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        next();
        
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
}