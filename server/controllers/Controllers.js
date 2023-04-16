const { LeagueOne, Users, WeeklyFixtures, Fixtures, Predictions } = require('../models')
const {request} = require("express");
const {where} = require("sequelize");
const {up} = require("../migrations/20230325204025-initialize");

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
    // Refactor this to throw exception on invalid credentials.
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

const updatePredictions = async (req, res) => {
    const username = req.params.username;
    const user = await Users.findOne({ where: { username: username } });
    const id = req.params.id;
    const predictions = req.body.predictions
    let result = []
    predictions.map(async (prediction) => {
        const fixture = await Fixtures.findOne({
                where: {
                    WeeklyFixtureWeekId: id,
                    home_team: prediction.home_team,
                    away_team: prediction.away_team
                },
            }
        )
        let predictionEntity = await Predictions.update({
                prediction: prediction.result
            },
            {
                where: {
                    FixtureFixtureId: fixture.fixture_id,
                    UserUserId: user.user_id
                },
                returning: true,
                plain: true
            })
        // Check if record does not exist
        if (predictionEntity[0] === 0) {
            predictionEntity = Predictions.create({
                prediction: prediction.result,
                FixtureFixtureId: fixture.fixture_id,
                UserUserId: user.user_id,
                returning: true,
                plain: true
            })
        }
        result.push(predictionEntity[1].dataValues);
    })
    res.json(result);
}

// To be invoked when updating table with final scores.
const updateResults = async (req, res) => {
    const id = req.params.id;
    const predictions = req.body.predictions
    predictions.map((prediction) => {
            Fixtures.update(
                prediction,
                {
                    where: {
                        WeeklyFixtureWeekId: id,
                        home_team: prediction.home_team,
                        away_team: prediction.away_team
                    }
                }
            )
            .then(result =>
                console.log(`Result: ${result}`)
            )
        }
    )
}

module.exports = { getTableInfo, createUser, getUsers, validateLogin, getFixtures, updatePredictions }