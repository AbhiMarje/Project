require("dotenv").config({ path: `../config/.env.SQL` });
const express = require('express');
const mysql = require('mysql')

const app = express();

app.use(express.json());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err, con) => {
    if (err) {
        throw err;
    } else {
        console.log('Database connection established');
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started at port: ' + PORT);
});