const express = require("express");

const {getTableInfo, createUser, getUsers, validateLogin, getFixtures} = require("../controllers/Controllers.js");
const bodyParser = require("body-parser");

const router = express.Router();
const jsonParser = bodyParser.json()

router.get("/leagueOneData", getTableInfo)
router.post("/register", jsonParser, createUser)
router.get("/users", getUsers)
router.post("/validateLogin", jsonParser, validateLogin)
router.get("/weeklyFixtures/:id", getFixtures)

module.exports = router