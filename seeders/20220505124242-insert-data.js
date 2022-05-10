'use strict';

module.exports = {

  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
      name: 'tejashri',
      address: 'pune',
      age: 24,
      createdAt: new Date(),
      updatedAt: new Date()

    }]);

  },



  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};