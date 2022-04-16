'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'kendaraan',
        details: 'mainan yg mempunyai roda'
      },
      {
        name: 'brick',
        details: 'mainan yg bisa bongkar pasang'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
