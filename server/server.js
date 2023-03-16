const express = require('express')
const app = express()
// const {Client} = require('pg')

// const db = new Client({
//     host: "localhost",
//     user: "postgres",
//     port: "5434",
//     password: "Ea$1ano220900",
//     database: "league1"
// })
//
// db.connect();
// db.query(`SELECT * FROM league1_table`, (err, res) => {
//     if(!err) {
//         console.log(res.rows);
//     } else {
//         console.log(err.message);
//     }
// })

const db = require('./models')

app.get("/api", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]})
})

db.sequelize.sync().then((req) => {
    app.listen(5000, () => console.log("Hello"))
    }
)