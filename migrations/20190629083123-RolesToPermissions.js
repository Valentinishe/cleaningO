'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('RolesToPermissions', [
      {
        permissionId: 1,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 2,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 3,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 4,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 5,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 6,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 3,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 4,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 5,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 6,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 3,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        permissionId: 4,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('RolesToPermissions', null, {});
  }
};
