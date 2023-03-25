require("dotenv").config({ path: `../config/.env.SQL` });
const connectDB = require('./Routers/connections');
const bodyParser = require('body-parser');

connectDB();

const express = require('express');
const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/auth/', (req, res, next) => {
    console.log("auth called");
    next();
});
app.use(require('./Routers/Users/Users.js'));
app.use(require('./Routers/Flights/Flights.js'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})