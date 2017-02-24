'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Skill_tukangs', [{skill_name: 'Tukang Kebun', createdAt: new Date(), updatedAt : new Date()}, {skill_name: 'Tukang Elektronik', createdAt: new Date(), updatedAt : new Date()},{skill_name: 'Tukang Bangunan', createdAt: new Date(), updatedAt : new Date()} ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
