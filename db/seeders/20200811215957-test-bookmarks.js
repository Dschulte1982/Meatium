'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookmarks', [
      { userId: 1, articleId: 1 },
      { userId: 1, articleId: 2 },
      { userId: 2, articleId: 1 },
      { userId: 3, articleId: 2 },
    ], { fields: ['userId', 'articleId'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookmarks', null, {});
  }
};
