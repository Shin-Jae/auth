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
        aboutUs: "An English professional football club based in Tottenham, London. It competes in the Premier League, the top flight of English football.",
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
        aboutUs: "The Avengers were a team of extraordinary individuals, with either superpowers or other special characteristics. Though primarily affiliated with the interests of the United States of America, the group's purpose was to protect global stability from inner or extraterrestrial threats.",
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
        aboutUs: "The pirate crew of the next King of the Pirates, the Straw Hats, notorious for causing trouble for whoever and wherever get in their way of conquering the Grand Line. A crew of different personalities, skills, strength, and weaknesses helping their captain become King of the Pirates.",
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
        aboutUs: "A professional N.B.A team the resides in Cleveland, Ohio. This team brought Cleveland it's first major championship in 52 years and they did it in historic fashion. Down 3-1 in a 7 game series vs the Golden State Warriors who finished the regular season with the best team record in N.B.A history. This Cavs team did what has never been done before and came back from 1-3 deficit and won the series 4-3",
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
        aboutUs: "An elite team of rogue S-class ninjas gathered from all of parts of the ninja world. Coming together to bring their version of 'peace' upon the ninja world.",
        image1: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.jfSx8GpIiDI5MlLIdpag2AHaI2%26pid%3DApi&f=1',
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcutewallpaper.org%2F21%2Fakatsuki-wallpaper-1920x1080%2FNaruto-Shippuden-Wallpaper-Akatsuki-WallpaperTag.jpg&f=1&nofb=1",
        image3: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexternal-preview.redd.it%2F9AalLai1MNc43G2Uj5NEICQvItQg468gI8WTd-c2idE.png%3Fformat%3Dpjpg%26auto%3Dwebp%26s%3Dee4ad67e4e70b7a85de9d4e7d890cb8ef1d2ae92&f=1&nofb=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        categoryId: 2,
        name: "The Benchwarmers",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.GooWulrjA2N0N4KAlk_i6wHaEK%26pid%3DApi&f=1",
        title: "Kings of Little League",
        location: "Pizza Hut",
        aboutUs: "We're a group of 3 adult 'nerds' who spent their childhoods longing to play baseball, but never got the chance (except Gus). One day a group of little league baseball players thought they could bully us off the baseball diamond. But we stood our ground and not let those kids get the better of us. Next thing we know were part of a team that travels and faces little league teams from all around. ",
        image1: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F17a5b1eb-0c3a-46ab-ae96-611a67f16f0e_1.d27ef005df13f77f3ee96a02e7bcd477.jpeg&f=1&nofb=1',
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aqZnoijzeD8VdzecgqV-QAHaEK%26pid%3DApi&f=1",
        image3: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FVideo123%2Fv4%2Ff1%2F81%2F42%2Ff1814213-970e-5d6a-69fb-4f6b906ab954%2Fpr_source.lsr%2F1200x630.jpg&f=1&nofb=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        categoryId: 3,
        name: "The Justice League",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fhbo-justice-league-synder-cut-2021_bGZoaGyUmZqaraWkpJRnZWltrWdlaW0.jpg&f=1&nofb=1",
        title: "World Saving",
        location: "Unknown",
        aboutUs: "A team of special individuals, with a special set of skills. Joining forces to fight the battles others can't and saving humanity in their hour of need.",
        image1: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnerdist.com%2Fwp-content%2Fuploads%2F2019%2F11%2FJustice-League-1200x676.jpg&f=1&nofb=1',
        image2: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.collider.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fjustice-league-movie-cast.jpg&f=1&nofb=1",
        image3: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpapersden.com%2Fimage%2Fdownload%2Fhbo-justice-league-synder-cut-2021_bGZoaGyUmZqaraWkpJRnZWltrWdlaW0.jpg&f=1&nofb=1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        categoryId: 4,
        name: "School of Rock",
        groupImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tuu1too6Uvhgh2rF8tBEsQHaEK%26pid%3DApi&f=1",
        title: "Rock",
        location: "Horace Green Prep School",
        aboutUs: "A struggling rock guitarist Dewey Finn, who is fired from his band and subsequently poses as a substitute teacher at a prestigious prep school. After witnessing the musical talent of the students, Dewey forms a band of fourth-graders to attempt to win the upcoming Battle of the Bands",
        image1: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-rDOeDn4jAlU%2FW04sjguvPJI%2FAAAAAAAAsuY%2FCeqwpiAtmHEljeJliBBCLUzE3CYwY59OACLcBGAs%2Fs1600%2Fschool-of-rock-poster-ftr.jpg&f=1&nofb=1',
        image2: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbostonhassle.com%2Fwp-content%2Fuploads%2F2019%2F09%2FnLUO2kQyyvG1DlCnHuxHwapbCTX.jpg&f=1&nofb=1",
        image3: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Fw1280%2FwU6BGs56U9MxWEqidBlUcfY3kNm.jpg&f=1&nofb=1',
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
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
