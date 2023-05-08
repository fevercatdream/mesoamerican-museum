const Employee = require('./employee');
const Civ = require('./civ');
const ArtType = require('./artType');
const ArtWork = require('./artWork');
const Visitor = require('./visitor');

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

Civ.belongsTo(Employee, {
  Key: 'id'
});

ArtType.belongsTo(Civ, {
  Key: 'id'
});

ArtWork.belongsTo(ArtType, {
  Key: 'id'
});

User.belongsToMany(ArtWork, {through: 'favorites'});
ArtWork.belongsToMany(Visitor, {through: 'favorites'});

module.exports = { Employee, Civ, ArtType, ArtWork, Visitor };
