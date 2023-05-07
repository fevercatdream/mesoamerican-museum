const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Museum extends Model {}

Museum.init(
    {
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
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'museum'
    }
);

// Museum.sync({ force: false });

module.exports = Museum;