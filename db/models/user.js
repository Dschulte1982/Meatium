'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
