'use strict';
module.exports = function(sequelize, DataTypes) {
  var Worklist = sequelize.define('Worklist', {
    Profile_tukangId: DataTypes.INTEGER,
    Skill_tukangId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    OrderId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Worklist;
};