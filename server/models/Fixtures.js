module.exports = (sequelize, DataTypes) => {
    const Fixtures = sequelize.define('Fixtures', {
            fixture_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            home_team: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            away_team: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            result: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: false,
            // Prevent sequelize making table names plural by default
            freezeTableName: true,
            tableName: 'fixtures'
        }
    );

    Fixtures.associate = models => {
        Fixtures.belongsToMany(models.Users, {through: models.Predictions})
        Fixtures.belongsTo(models.WeeklyFixtures, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Fixtures;
}