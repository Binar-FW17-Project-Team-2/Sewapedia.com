'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('products', [
       {
        id: 1000,
        name: 'mobil remote',
        category: 'kendaraan',
        details: 'mobil remote bisa dinaiki',
        img_url: [
          'https://avatars.githubusercontent.com/u/93750873?v=4',
          'https://avatars.githubusercontent.com/u/34944169?v=4',
        ],
        price: 20000,
        stock: 5
       },
       {
        id: 1001,
        name: 'Home Supermarket',
        category: 'brick',
        details: 'Mainan belanja-belanjaan yang keren dan cocok untuk anak Anda,',
        img_url: [
          'https://avatars.githubusercontent.com/u/93750873?v=4',
          'https://avatars.githubusercontent.com/u/34944169?v=4',
        ],
        price: 10000,
        stock: 5
       },
     ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
