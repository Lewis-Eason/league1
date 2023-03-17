const express = require("express");

const {getTableInfo, createUser, getUsers} = require("../controllers/Controllers.js");

const router = express.Router();

router.get("/api", getTableInfo)
router.post("/register", createUser)
router.get("/users", getUsers)

module.exports = router