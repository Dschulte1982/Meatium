'use strict';

const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
    static associate(models) {
      User.hasMany(models.Article, { foreignKey: 'authorId' });
    }
  };
  User.init({
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(30),
      validate: {
        len: {
          args: [5, 30],
          msg: 'Username must be between 5 and 30 characters long.'
        }
      }
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(100),
      validate: {
        isEmail: true,
        msg: 'Email field must be a valid email.'
      }
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
