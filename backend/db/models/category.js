'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Topic.hasMany(models.Group, { foreignKey: "groupId" });
  };
  return Category;
};
