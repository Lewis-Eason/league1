module.exports = (sequelize, DataTypes) => {
    const Fixtures = sequelize.define('fixtures', {
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
        }
    );

    Fixtures.associate = models => {
        Fixtures.belongsToMany(models.users, {through: models.predictions})
        Fixtures.belongsTo(models.weekly_fixtures, {
            foreignKey: {
                allowNull: false
            }
        })
    };

    return Fixtures;
}