const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
})

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// to start the server on port 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});