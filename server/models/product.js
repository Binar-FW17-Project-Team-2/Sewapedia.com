'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.User, {
        through: models.Wishlist,
        foreignKey: 'productId',
        otherKey: 'userId'
      })
      Product.belongsToMany(models.User, {
        through: models.Payment,
        foreignKey: 'productId',
        otherKey: 'userId'
      })
      Product.belongsToMany(models.User, {
        through: models.RentedProduct,
        foreignKey: 'productId',
        otherKey: 'userId'
      })
    }
  }
  Product.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `name can't be empty`
        },
        notNull: {msg: `can't be null`}
      }
    },
    category: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `category can't be empty`
        },
        notNull: {msg: `can't be null`}
      }
    },
    details: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: `details can't be empty`
        },
        notNull: {msg: `can't be null`}
      }
    },
    img_url: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: 'cannot be null'},
        isInt: {msg: 'price must be number'}
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: 'cannot be null'},
        isInt: {msg: 'stock must be number'}
      }
    },
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
  });
  return Product;
};