require("dotenv").config({ path: `../config/.env.SQL` });
require('./Routers/connection')

const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./Routers/Users/Users.js'));
app.use(require('./Routers/Flights/Flights.js'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started at port: ' + PORT);
});
