module.exports = (sequelize, DataTypes) => {
    const WeeklyFixtures = sequelize.define('WeeklyFixtures', {
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
            tableName: 'weekly_fixtures'
        }
    );

    return WeeklyFixtures;
}