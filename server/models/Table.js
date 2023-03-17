module.exports = (sequelize, DataTypes) => {
    const LeagueOne = sequelize.define('LeagueOne', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        team: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return LeagueOne;
}