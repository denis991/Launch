module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notifications', [{
      body: 'Vacancy is closed',
      user_id: 1
    },
    {
      body: 'Vacancy is open',
      user_id: 1
    },
    {
      body: 'New interview is coming up',
      user_id: 1
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};
