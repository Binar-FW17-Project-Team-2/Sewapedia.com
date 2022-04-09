'use strict';
const {User} = require('../models')
module.exports = {
  async up (queryInterface, Sequelize) {
    await User.create({
      id:1000,
      email: 'test@admin.sewapedia.com',
      password: 'password00',
      img_url: 'https://avatars.githubusercontent.com/u/34944169?v=4',
      role: 'admin'
    })
    await User.create({
      id:1001,
      email: 'user01@gmail.com',
      password: 'password00',
      img_url: 'https://avatars.githubusercontent.com/u/93750873?v=4'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
