module.exports = (sequelize, DataTypes) => {
    const Predictions = sequelize.define('predictions', {
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
        }
    );

    return Predictions;
}