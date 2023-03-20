const mysql = require('mysql')

const sql = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

sql.connect((err, con) => {
    if (err) {
        throw err;
    } else {
        console.log('Database connection established');

    }
})

module.exports = sql;