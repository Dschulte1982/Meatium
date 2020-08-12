'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Follows', [
      { userId: 1, authorId: 3},
      { userId: 2, authorId: 3},
      { userId: 3, authorId: 1},
    ], { fields: ['userId', 'authorId']});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Follows', null, {});
  }
};
