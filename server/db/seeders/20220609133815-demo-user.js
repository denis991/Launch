module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      surname: 'admin',
      email: 'admin@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }, {
      name: 'den',
      surname: 'gu',
      email: 'd.991@mail.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }, {
      name: 'borsch',
      surname: 'Zhenya',
      email: 'borsch@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }, {
      name: 'base',
      surname: 'Vlad',
      email: 'base@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
