'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Groups', [
      {
        ownerId: 4,
        categoryId: 1,
        name: "Straw Hat Pirates",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1134221.jpg&f=1&nofb=1",
        title: "Pirates",
        location: "New World",
        aboutUs: "Aliquam epicurei mandamus vix an, nihil semper feugait sea eu. Et numquam gubergren per. Eam viris officiis concludaturque ne, est illud dolor id. Sed ne inani torquatos, sed ne movet fabellas, vel in tibique ancillae.",
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        image5: null,
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
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
