'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        groupId: 1,
        rating: 5,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: null,
        image2: null,
        image3: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
