module.exports = (sequelize, DataTypes) => {
    const Fixtures = sequelize.define('Fixtures', {
            id: {
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
            timestamps: false
        }
    );

    Fixtures.associate = models => {
        Fixtures.belongsToMany(models.Users, {through: models.Predictions})
    };

    return Fixtures;
}