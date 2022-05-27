'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    groupId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    image3: DataTypes.STRING
  }, {});
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.Group, {
      foreignKey: "questionId", onDelete: 'CASCADE',
    })
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};
