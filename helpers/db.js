require('dotenv').config()
const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        console.log(`\u001b[31m[ERR] Could not establish database connection`);
        return false;
    }
    console.log(`\x1b[0m[LOG] Database connected successfully`);
    return true
});

module.exports = connection;