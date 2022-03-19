const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mySQL username,
        user: 'root',
        // Your mySQL password,
        password: '1Er@f!?xAqIii@b',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;