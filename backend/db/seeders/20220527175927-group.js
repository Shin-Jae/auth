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
        ownerId: 3,
        categoryId: 2,
        name: "Tottenham Hotspur F.C",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.P8kWTODBtgxmG49c6WLqlQHaEK%26pid%3DApi&f=1",
        title: "Football Club",
        location: "Tottenham, London",
        aboutUs: "Aliquam epicurei mandamus vix an, nihil semper feugait sea eu. Et numquam gubergren per. Eam viris officiis concludaturque ne, est illud dolor id. Sed ne inani torquatos, sed ne movet fabellas, vel in tibique ancillae.",
        image1: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ticketgum.com%2Fsites%2Fdefault%2Ffiles%2Fteams%2F105.jpg&f=1&nofb=1',
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIF.yTYczS2yTQGukNLWEqv4VA%26pid%3DApi&f=1",
        image3: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.mt2q8n1fhpPw6NpCMrTdSwHaD4%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        categoryId: 3,
        name: "The Avengers",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._PjFYfkARg7U-GdH7AkJNwHaEK%26pid%3DApi&f=1",
        title: "Special Operations",
        location: "Where we are needed",
        aboutUs: "Aliquam epicurei mandamus vix an, nihil semper feugait sea eu. Et numquam gubergren per. Eam viris officiis concludaturque ne, est illud dolor id. Sed ne inani torquatos, sed ne movet fabellas, vel in tibique ancillae.",
        image1: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.H9O0yHpdEh3YUaDvCMAyFgHaE8%26pid%3DApi&f=1',
        image2: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4884734.jpg&f=1&nofb=1',
        image3: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fksassets.timeincuk.net%2Fwp%2Fuploads%2Fsites%2F55%2F2019%2F01%2Favengers.jpg&f=1&nofb=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 4,
        categoryId: 1,
        name: "Straw Hat Pirates",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tSLUTkFeF3zkEGkm5wbfWwHaE4%26pid%3DApi&f=1",
        title: "Pirates",
        location: "New World",
        aboutUs: "Aliquam epicurei mandamus vix an, nihil semper feugait sea eu. Et numquam gubergren per. Eam viris officiis concludaturque ne, est illud dolor id. Sed ne inani torquatos, sed ne movet fabellas, vel in tibique ancillae.",
        image1: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1134221.jpg&f=1&nofb=1",
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2F_i302WGI6hozJFfczUQmUsIxgBR5Y8nG9OE_EZwEmUpXBXaSZDmCNMR1PIfozuGhK7DZR9QSNevgSIoQTN9txN3-z6tMleRaxI9CQePs2ZeqCwBFDSPNR1XfpahjjY1zrZFUofbXFx60no8Jdw&f=1&nofb=1",
        image3: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Xsd1TTtV9JR7wsl6tZPl_AHaGQ%26pid%3DApi&f=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        categoryId: 2,
        name: "2015-16 Cleveland Cavaliers",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HkU2LjIR3ivxTmePONS64wHaHa%26pid%3DApi&f=1",
        title: "Professional Basketball Team",
        location: "Cleveland, Ohio",
        aboutUs: "Aliquam epicurei mandamus vix an, nihil semper feugait sea eu. Et numquam gubergren per. Eam viris officiis concludaturque ne, est illud dolor id. Sed ne inani torquatos, sed ne movet fabellas, vel in tibique ancillae.",
        image1: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.cdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F160622160732-05-cleveland-cavaliers-parade-0622-super-169.jpg&f=1&nofb=1',
        image2: 'https://hoopshabit.com/files/2015/09/nba-playoffs-atlanta-hawks-cleveland-cavaliers.jpg',
        image3: "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2020/03/2016/1242/627ca67c-9349743-lebron-james-nba-finals-cleveland-cavaliers-golden-state-warriors.jpg?ve=1&tl=1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        categoryId: 5,
        name: "The Akatsuki",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.IpGdBJUjJl3pWcLXvjda2QHaFA%26pid%3DApi&f=1",
        title: "Special Operations",
        location: "Unknown",
        aboutUs: "Aliquam epicurei mandamus vix an, nihil semper feugait sea eu. Et numquam gubergren per. Eam viris officiis concludaturque ne, est illud dolor id. Sed ne inani torquatos, sed ne movet fabellas, vel in tibique ancillae.",
        image1: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jfSx8GpIiDI5MlLIdpag2AHaI2%26pid%3DApi&f=1',
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcutewallpaper.org%2F21%2Fakatsuki-wallpaper-1920x1080%2FNaruto-Shippuden-Wallpaper-Akatsuki-WallpaperTag.jpg&f=1&nofb=1",
        image3: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2F9AalLai1MNc43G2Uj5NEICQvItQg468gI8WTd-c2idE.png%3Fformat%3Dpjpg%26auto%3Dwebp%26s%3Dee4ad67e4e70b7a85de9d4e7d890cb8ef1d2ae92&f=1&nofb=1',
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
