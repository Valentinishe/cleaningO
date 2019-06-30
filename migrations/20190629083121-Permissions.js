'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Permissions', [
      {
        title: "Read Users",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Write Users",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Read Clients",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Write Clients",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Read Roles",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Write Roles",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', null, {});
  }
};
