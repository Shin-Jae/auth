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
        userId: 2,
        groupId: 1,
        rating: 5,
        review: "Love the team, big fan, hopefully we can keep this core together and keep improving with our new coach",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GFqnfbrvTJdA3J6zAawIUgHaE8%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SMdPVdUvdro3_cBDefbn4QHaE8%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        groupId: 1,
        rating: 1,
        review: "Poverty Club, win a trophy",
        image1: null,
        image2: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 2,
        groupId: 2,
        rating: 4,
        review: "The battle in New York destroyed my whole apartment complex, but I'm still glad the Avengers were there to save the day before it got much worse",
        image1: null,
        image2: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 5,
        groupId: 2,
        rating: 1,
        review: "Hate you guys",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.G7r36W2Sv4stPJNwbAm2cAHaHa%26pid%3DApi&f=1",
        image2: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 5,
        groupId: 2,
        rating: 2,
        review: "Miss me yet?",
        image1: null,
        image2: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        groupId: 5,
        rating: 4,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 6,
        groupId: 6,
        rating: 2,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        groupId: 6,
        rating: 3,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        groupId: 4,
        rating: 4,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
