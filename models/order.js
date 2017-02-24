'use strict';
module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    Profile_tukangId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Order;
};