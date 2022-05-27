'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BYIOCwt9xiOko9mlHP-uCwHaHa%26pid%3DApi&f=1",
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        username: 'FakeUser1',
        profileImg: null,
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        profileImg: null,
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'luffy@pirate.com',
        username: 'NextKingOfPirates',
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmugiwarashop.altervista.org%2Fwp-content%2Fuploads%2F2016%2F11%2Fmonkey_d__luffy___500_million__new_bounty_poster__by_anti_form30-d9b3k1w-600x922.jpg&f=1&nofb=1",
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
