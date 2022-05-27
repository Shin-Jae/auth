'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Categories', [
      {
        category: "Adventure",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: "Sports",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: "Music",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        category: "Miscellaneous",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
