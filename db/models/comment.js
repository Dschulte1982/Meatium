'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: 'userId' });
      Comment.belongsTo(models.Article, { foreignKey: 'articleId' });
      Comment.belongsTo(models.Comment, { foreignKey: 'replyTo' });
      Comment.hasMany(models.Comment, { foreignKey: 'replyTo' });
    }
  };
  Comment.init({
    articleId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    replyTo: {
      type: DataTypes.INTEGER,
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
