require("dotenv").config({ path: `../config/.env.SQL` });
require('./APIs/connection')

const express = require('express');
const app = express();

app.use(express.json());
app.use(require('./APIs/Login/Login.js'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server started at port: ' + PORT);
});
