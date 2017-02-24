'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile_tukang = sequelize.define('Profile_tukang', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Profile_tukang.belongsTo(models.Skill_tukang)
      }
    }
  });
  return Profile_tukang;
};
