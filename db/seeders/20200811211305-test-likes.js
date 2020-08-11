'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Likes', [
      { userId: 1, articleId: 1 },
      { userId: 1, articleId: 2 },
      { userId: 2, articleId: 1 },
      { userId: 2, articleId: 2 },
      { userId: 3, articleId: 1 },
    ], { fields: ['userId', 'articleId'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Likes', null, {});
  }
};
