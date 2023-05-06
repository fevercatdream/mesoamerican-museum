const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ArtType extends Model {}

ArtType.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'art_type',
  }
);

ArtType.sync({ force: false });

module.exports = ArtType;
