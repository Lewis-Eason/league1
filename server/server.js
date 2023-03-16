const express = require('express')
const app = express()
const db = require('./models')
const { LeagueOne } = require('./models')

app.get("/api", async (req, res) => {
        const result = await LeagueOne.findAll();
        res.json(result);
    })

db.sequelize.sync().then((req) => {
    app.listen(5000, () => console.log("Hello"))
    }
)