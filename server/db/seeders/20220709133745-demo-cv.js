module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('CVs', [{
      title: 'Junior Frontend Developer',
      elbrus: true,
      github: 'https://github.com/KulikovRV/',
      contact: '+777777777',
      body: 'react-master',
      awards: 'МС по кикеру',
      experience: '3 месяца жестких тренировок в Elbrus',
      education: 'ПТУ - сантехник',
      views: '10',
      user_id: 1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CVs', null, {});
  }
};
