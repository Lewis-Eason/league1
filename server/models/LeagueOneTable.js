module.exports = (sequelize, DataTypes) => {
    const LeagueOne = sequelize.define('league_one_table', {
        league_one_id: {
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
            default: 0,
        },
        wins: {
            type: DataTypes.INTEGER,
            default: 0,
        },
        draws: {
            type: DataTypes.INTEGER,
            default: 0,
        },
        losses: {
            type: DataTypes.INTEGER,
            default: 0,
        },
        for: {
            type: DataTypes.INTEGER,
            default: 0,
        },
        against: {
            type: DataTypes.INTEGER,
            default: 0,
        },
        goal_difference: {
            type: DataTypes.INTEGER,
            default: 0,
        },
        points: {
            type: DataTypes.INTEGER,
            default: 0,
        }
        },
        {
            timestamps: false,
            // Prevent sequelize making table names plural by default
            freezeTableName: true,
        }
        );
    return LeagueOne;
}