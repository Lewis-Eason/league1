module.exports = (sequelize, DataTypes) => {
    return sequelize.define('league1_table', {
        team: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}