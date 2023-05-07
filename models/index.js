const Museum = require('./museum');
const Civ = require('./civ');
const ArtType = require('./artType');
const ArtWork = require('./artWork');
const User = require('./user');

Museum.hasMany(Civ, {
    Key: 'id',
    onDelete: 'CASCADE'
  });

Civ.hasMany(ArtType, {
  Key: 'id',
  onDelete: 'CASCADE'
});

ArtType.hasMany(ArtWork, {
    Key: 'id',
    onDelete: 'CASCADE'
  });

Civ.belongsTo(Museum, {
  Key: 'id'
});

ArtType.belongsTo(Civ, {
  Key: 'id'
});

ArtWork.belongsTo(ArtType, {
  Key: 'id'
});

User.belongsToMany(ArtWork, {through: 'favorites'});
ArtWork.belongsToMany(User, {through: 'favorites'});

module.exports = { Museum, Civ, ArtType, ArtWork, User };
