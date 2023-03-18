const express = require("express");

const {getTableInfo, createUser, getUsers, validateLogin} = require("../controllers/Controllers.js");
const bodyParser = require("body-parser");

const router = express.Router();
const jsonParser = bodyParser.json()

router.get("/api", getTableInfo)
router.post("/register", jsonParser, createUser)
router.get("/users", getUsers)
router.post("/validateLogin", jsonParser, validateLogin)

module.exports = router