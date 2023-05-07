const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

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

// Museum.sync({ force: false });

module.exports = Museum;