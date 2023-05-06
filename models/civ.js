const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Civ extends Model {}

Civ.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time_period: {
            type: DataTypes.INTEGER,
            allowNull: false
        }  
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'civ'
    }
);

Civ.sync({ force: false });

module.exports = Civ;