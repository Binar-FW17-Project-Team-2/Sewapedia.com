'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Biodata, {
        foreignKey: {
          name: 'userId',
        },
        onDelete: 'CASCADE',
        as: "Biodata"
      })
      User.belongsToMany(models.Product, {
        through: models.Wishlist,
        as: 'product_wishlist',
        foreignKey: 'userId',
        otherKey: 'productId'
      })
      User.belongsToMany(models.Product, {
        through: models.Payment,
        as: 'product_payment',
        foreignKey: 'userId',
        otherKey: 'productId'
      })
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: 'myOrder'
      })
      User.hasOne(models.OrderItem, {
        foreignKey: 'userId',
        as: 'myItem'
      })
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
      validate: {
        isEmail : {
          args: true,
          msg: 'email not valid'
        },
        notNull: {msg: 'cannot be null'}
      }
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        len: {
          args: [8],
          msg: 'password minimal 8 char'
        },
        notNull: {msg: 'cannot be null'}
      }
    },
    img_url: {
      type: DataTypes.STRING()
    },
    role: {
      type: DataTypes.ENUM,
      values: ['admin', 'user'],
      defaultValue: 'user'
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false,
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword
    }
  });
  return User;
};

async function hashPassword(user, options) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (err) {
    throw new Error(err)
  }
}