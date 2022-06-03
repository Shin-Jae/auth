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
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Nkp0F_ZQVTN42T4Ns9lXmQHaEK%26pid%3DApi&f=1",
        image3: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jmMrTb1h_-ITFtCqj9mXFwHaJQ%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        groupId: 2,
        rating: 2.5,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a6c7b50099273.5a64003d635c8.jpg",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image3: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 1,
        groupId: 4,
        rating: 4,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        image3: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a6c7b50099273.5a64003d635c8.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 2,
        groupId: 3,
        rating: 3,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        image3: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a6c7b50099273.5a64003d635c8.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 4,
        groupId: 5,
        rating: 4,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        image3: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a6c7b50099273.5a64003d635c8.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        userId: 3,
        groupId: 1,
        rating: 1,
        review: "Lorem ipsum dolor sit amet, et nec aperiri scribentur. Harum laudem scripta vim ei, vis latine pericula at. Ex duo iuvaret mandamus imperdiet. Mel exerci veritus splendide ne, vide homero vocibus qui no, an lorem tation perfecto nam. Ut eam oblique dissentiet.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7%26pid%3DApi&f=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xJrCryY5WIzlb09HDiQFlAHaHR%26pid%3DApi&f=1",
        image3: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5a6c7b50099273.5a64003d635c8.jpg",
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
