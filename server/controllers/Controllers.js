const { LeagueOne, Users, WeeklyFixtures, Fixtures } = require('../models')

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

const validateLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const result = await Users.findAll({
        where: {
            username: username,
            password: password,
        }
    })
    res.json(result);
}

const getFixtures = async (req, res) => {
    const id = req.params.id;
    const result = await WeeklyFixtures.findByPk(id, {
        include: [{
            model: Fixtures
        }]
    });
    res.json(result);
}

module.exports = { getTableInfo, createUser, getUsers, validateLogin, getFixtures }