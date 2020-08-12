'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      { username: 'DemoUser', email: 'demo@user.io', hashedPassword: await bcrypt.hash('password', 10) },
      { username: 'DemoUser2', email: 'demo2@user.io', hashedPassword: await bcrypt.hash('password', 10) },
      { username: 'wmaccarty', email: 'wmaccarty@gmail.com', hashedPassword: await bcrypt.hash('2481632', 10) },
    ], { fields: ['username', 'email', 'hashedPassword'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
