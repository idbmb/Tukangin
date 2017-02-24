'use strict';
module.exports = function(sequelize, DataTypes) {
  var Skill_tukang = sequelize.define('Skill_tukang', {
    Profile_tukangId: DataTypes.INTEGER,
    skill_name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Skill_tukang;
};