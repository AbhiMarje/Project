require("dotenv").config({ path: `../config/.env.MONGO` });
const connectDB = require('./Routers/connections');
const bodyParser = require('body-parser');

connectDB();

const express = require('express');
const app = express();

app.use(express.json());
app.use(bodyParser.json());

const checkAuth = require('./Middlewares/checkAuth');
app.use('/api/auth/', checkAuth.validate);
app.use(require('./Routers/Users/Users.js'));
app.use(require('./Routers/Flights/Flights.js'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})