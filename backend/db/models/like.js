'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    teamId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    like: DataTypes.BOOLEAN
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: "userId" });
    Like.belongsTo(models.Group, { foreignKey: "groupId" });
  };
  return Like;
};
