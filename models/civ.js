const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Civ extends Model {}

Civ.init(
    {
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        civilization_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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

module.exports = Civ;