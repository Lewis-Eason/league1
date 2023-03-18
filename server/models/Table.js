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
        },
        matches_played: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        wins: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        draws: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        losses: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        for: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        against: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        goal_difference: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
        }
        },
        {
            timestamps: false
        }
        );
    return LeagueOne;
}