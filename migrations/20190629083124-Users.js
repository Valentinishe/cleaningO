'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Steve',
        lastName: 'Jons',
        email: 'jobs@demo.com',
        phone: '+11777777777',
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Petra',
        lastName: 'Franchesko',
        email: 'Petra@demo.com',
        phone: '+5680501234567',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Taras',
        lastName: 'Bulba',
        email: 'taras@demo.com',
        phone: '+380501234567',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Kate',
        lastName: 'Doe',
        email: 'kate@demo.com',
        phone: '+3805012123567',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Bendjamine',
        lastName: 'Franklin',
        email: 'franklin@demo.com',
        phone: '+1180501234567',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
