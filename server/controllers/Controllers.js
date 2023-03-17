const { LeagueOne, Users } = require('../models')

const getTableInfo = async (req, res) => {
    const result = await LeagueOne.findAll();
    res.json(result);
}

const createUser = async (req, res) => {
    const user = await Users.create(req.body);
    res.json(user);
}

const getUsers = async (req, res) => {
    const result = await Users.findAll();
    res.json(result);
}

module.exports = { getTableInfo, createUser, getUsers }