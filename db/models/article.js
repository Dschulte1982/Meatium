'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsTo(models.User, { foreignKey: 'authorId' });
      Article.belongsTo(models.Category, { foreignKey: 'categoryId' });
    }
  };
  Article.init({
    authorId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    imagePath: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
