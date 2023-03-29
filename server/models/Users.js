module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('users', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
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

    Users.associate = models => {
        Users.belongsToMany(models.fixtures, {through: models.predictions})
    };

    return Users;
}