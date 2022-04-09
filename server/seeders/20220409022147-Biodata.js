'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('biodata', [
      {
        userId:1000,
        address: 'jakarta utara',
        firstName: 'admin',
        lastName: 'lucu'
      },
      {
        userId:1001,
        address: 'jakarta selatan',
        firstName: 'depan',
        lastName: 'belakang'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('biodata', null, {});
  }
};
