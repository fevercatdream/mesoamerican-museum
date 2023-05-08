const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Employee extends Model {}

Employee.init(
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
        modelName: 'museum',
        hooks:{
            beforeCreate: musObj=>{
                console.log(musObj)
                musObj.password = bcrypt.hashSync(musObj.password,3);
                return musObj;
            }
        }
    }
);

// Employee.sync({ force: false });

module.exports = Employee;