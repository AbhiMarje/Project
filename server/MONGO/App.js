require("dotenv").config({ path: `../config/.env.SQL` });
const connectDB = require('./Routers/connections');
const bodyParser = require('body-parser');

connectDB();

const express = require('express');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(require('./Routers/Login/Login.js'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})