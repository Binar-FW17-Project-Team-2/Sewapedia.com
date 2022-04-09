'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payments', [
      {
        userId: 1000,
        productId: 1001,
        lamaSewa: 10,
        totalPrice: 100000
      },
      {
        userId: 1001,
        productId: 1000,
        lamaSewa: 4,
        totalPrice: 80000
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payments', null, {});
  }
};
