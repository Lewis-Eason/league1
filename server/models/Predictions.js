module.exports = (sequelize, DataTypes) => {
    const Predictions = sequelize.define('Predictions', {
            prediction_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            prediction: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: false,
            // Prevent sequelize making table names plural by default
            freezeTableName: true,
            tableName: 'predictions'
        }
    );

    return Predictions;
}