'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'Breakfast', description: 'Great meals to wake up to!'},
      { name: 'Lunch', description: 'Middle of the day noms!'},
      { name: 'Dinner', description: 'Last meal of the day.'},
      { name: 'Vegetarian', description: 'None meat.'},
      { name: 'Vegan', description: 'Cruelty free and environmentally friendly!'},
      { name: 'Baking', description: 'Like science you can eat!'},
      { name: 'Appetizers', description: "Like a warmup for your belly's workout!"},
      { name: 'Sous-Vide', description: "Doesn't your food deserve a good long soak at the end of the day?"},
      { name: 'Barbecue/Grilling', description: "America: F Yeah!"},
      { name: 'Quick and Easy', description: "For when you don't have time for that mess."},
    ], { fields: ['name', 'description'] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
