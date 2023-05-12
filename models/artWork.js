const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Artwork extends Model {}

Artwork.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    artworkLike: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'artwork',
  }
);

// This creates the table in the database
// Artwork.sync({ force: false });

module.exports = Artwork;
