module.exports = (sequelize, DataTypes) => {
    const LeagueOne = sequelize.define('LeagueOne', {
        team: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return LeagueOne;
}