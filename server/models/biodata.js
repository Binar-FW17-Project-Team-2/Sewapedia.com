'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Biodata.belongsTo(models.User, {
        foreignKey: 'userId'
      })
    }
  }
  Biodata.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `first name can't be empty`
        },
        len: {
          args: [0, 50],
          msg: `first name must be less than 50`
        },
        notNull: {msg: 'cannot be null'}
      }
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `last name can't be empty`
        },
        len: {
          args: [0, 50],
          msg: `last name must be less than 50`
        },
        notNull: {msg: 'cannot be null'}
      }
    },
    address: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `address can't be empty`
        },
        notNull: {msg: 'cannot be null'}
      }
    },
  }, {
    sequelize,
    modelName: 'Biodata',
    tableName: 'biodata',
    timestamps: false
  });
  return Biodata;
};