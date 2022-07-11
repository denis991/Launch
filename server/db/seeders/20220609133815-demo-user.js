module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      surname: 'admin',
      email: 'admin@admin.ru',
      password: '1234qwer',
    }, {
      name: 'den',
      surname: 'gu',
      email: 'd.991@mail.ru',
      password: '1234qwer',
    }, {
      name: 'borsch',
      surname: 'Zhenya',
      email: 'borsch@admin.ru',
      password: '1234qwer',
    }, {
      name: 'base',
      surname: 'Vlad',
      email: 'base@admin.ru',
      password: '1234qwer',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
