'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Comments', [
      { articleId: 1, userId: 1, replyTo: null, text: "You're not my buddy, guy!" },
      { articleId: 1, userId: 1, replyTo: 1, text: "You're not my guy, friend!" },
      { articleId: 1, userId: 1, replyTo: 2, text: "You're not my friend, buddy!" },
      { articleId: 2, userId: 1, replyTo: null, text: "This is my favorite food, I could eat it for breakfast, lunch and dinner"},
      { articleId: 2, userId: 1, replyTo: null, text: "Add avocado you cowards!" }
    ], { fields: ['articleId', 'userId', 'replyTo', 'text'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};
