module.exports = (sequelize, DataTypes) => {
    const WeeklyFixtures = sequelize.define('weekly_fixtures', {
            week_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            week: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            // Prevent sequelize making table names plural by default
            freezeTableName: true,
        }
    );

    return WeeklyFixtures;
}