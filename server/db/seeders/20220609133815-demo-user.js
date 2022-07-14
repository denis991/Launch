module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Стив',
      surname: 'Джобс',
      email: 'admin@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }, {
      name: 'Денис',
      surname: 'Гуцуляк',
      email: 'd.991@mail.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }, {
      name: 'Илон',
      surname: 'Маск',
      email: 'borsch@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }, {
      name: 'Билли',
      surname: 'Херрингтон',
      email: 'gachi@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    },
    {
      name: 'Билл',
      surname: 'Гейтс',
      email: 'micro@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    },
    {
      name: 'Винсент',
      surname: 'Вега',
      email: 'vega@admin.ru',
      password: '$2b$10$NZjGaK8EtdAuDhBig430gOg3PCgbm2ea0a7m5oou1GRp2QlyDlVi2',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
