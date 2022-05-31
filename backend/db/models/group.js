'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    ownerId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    groupImg: DataTypes.STRING,
    title: DataTypes.STRING,
    location: DataTypes.STRING,
    aboutUs: DataTypes.TEXT,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING,
    image4: DataTypes.STRING,
    image5: DataTypes.STRING
  }, {});
  Group.associate = function (models) {
    // associations can be defined here
    Group.belongsTo(models.User, { foreignKey: "ownerId" });
    Group.belongsTo(models.Category, { foreignKey: "categoryId" });
    Group.hasMany(models.Review, { foreignKey: "groupId" });
    Group.hasOne(models.Like, { foreignKey: "groupId" });
  };
  return Group;
};
