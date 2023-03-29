const express = require('express')
const app = express()
const db = require('./models')

const allRoutes = require('./routes/Table');
app.use("/", allRoutes)

db.sequelize.sync().then(() => {
    app.listen(5000)
    }
)