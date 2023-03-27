require("dotenv").config({path: `../../config/.env.MONGO`});
const jwt = require('jsonwebtoken');

exports.validate = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            res.status(400).send({err: 'The login token was invalid or has expired. Please try to login again.'});
        } else {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_KEY);
            req.userData = decoded;
            next();
        }
        
    } catch (err) {
        res.status(401).send({ err: err.message });
    }
}