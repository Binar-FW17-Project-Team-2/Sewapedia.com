'use strict';
const {
  Model
} = require('sequelize');
const Product = require('./product')
module.exports = (sequelize, DataTypes) => {
  class RentedProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RentedProduct.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'tenant'
      })
      RentedProduct.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'rentedProduct'
      })
    }
  }
  RentedProduct.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    rentalDate: {
      type: DataTypes.DATEONLY,
      allowNull:false,
      validate: {
        isDate: {
          args: true,
          msg: 'date not valid'
        },
        notNull: {
          msg: 'cannot be null'
        }
      }
    },
    returnDate: {
      type: DataTypes.DATEONLY,
      allowNull:false,
      validate: {
        isDate: {
          args: true,
          msg: 'date not valid'
        },
        notNull: {
          msg: 'cannot be null'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'RentedProduct',
    tableName: 'rented_products',
    timestamps: false,
  });
  return RentedProduct;
};