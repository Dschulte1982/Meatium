'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { username: 'DemoUser', email: 'demo@user.io', hashedPassword: bcrypt.hashSync('password', 10) }
    ], { fields: ['username', 'email', 'hashedPassword'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
