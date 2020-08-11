'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Interests', [
      { userId: 1, categoryId: 1 },
      { userId: 1, categoryId: 2 },
      { userId: 1, categoryId: 3 },
      { userId: 1, categoryId: 4 },
      { userId: 1, categoryId: 5 },
      { userId: 2, categoryId: 6 },
      { userId: 2, categoryId: 7 },
      { userId: 3, categoryId: 10 },
    ], { fields: ['userId', 'categoryId'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Interests', null, {});
  }
};
