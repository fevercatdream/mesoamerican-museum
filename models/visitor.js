const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Visitor extends Model {}

Visitor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    liked_subject_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    hooks:{
      beforeCreate: userObj=>{
          console.log(userObj)
          userObj.password = bcrypt.hashSync(userObj.password,3);
          return userObj;
      }
  }
  }
);

// Visitor.sync({ force: false });

module.exports = Visitor;
