'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rented_products', [
      {
        userId: 1000,
        productId: 1001,
        rentalDate: '2022-05-09',
        returnDate: '2022-05-19'
      },
      {
        userId: 1001,
        productId: 1000,
        rentalDate: '2022-04-18',
        returnDate: '2022-04-22'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rented_products', null, {});
  }
};
