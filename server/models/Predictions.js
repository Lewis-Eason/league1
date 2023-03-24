const Users = require("./Users");
const Fixtures = require(__dirname + '/Fixtures.js')

module.exports = (sequelize, DataTypes) => {
    const Predictions = sequelize.define('Predictions', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            prediction: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: false
        }
    );

    // Users.belongsToMany(Fixtures, { through: Predictions });
    // Fixtures.belongsToMany(Users, { through: Predictions });

    return Predictions;
}