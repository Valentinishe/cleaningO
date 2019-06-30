'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        title: "Admin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Manager",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Client",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
