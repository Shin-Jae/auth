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
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CicYSDwa4Bc800Tlzw9txAHaFj%26pid%3DApi&f=1",
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        username: 'FakeUser2',
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0L8JYZIEpS0WdHFPnz6tjAHaE7%26pid%3DApi&f=1",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'luffy@pirate.com',
        username: 'NextKingOfPirates',
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmugiwarashop.altervista.org%2Fwp-content%2Fuploads%2F2016%2F11%2Fmonkey_d__luffy___500_million__new_bounty_poster__by_anti_form30-d9b3k1w-600x922.jpg&f=1&nofb=1",
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        email: 'thanos@thanos.io',
        username: 'Thanos123',
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.IJuTWnAhS2DK0mZm0mgd3gHaFj%26pid%3DApi&f=1",
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'bot@bot.com',
        username: 'smiley',
        profileImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.hc4O-KTD3NxOoPzkAmyQWAHaHa%26pid%3DApi&f=1",
        hashedPassword: bcrypt.hashSync('password3')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
