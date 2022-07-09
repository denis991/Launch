module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vacancies', [{
      title: 'Junior Frontend Developer',
      level: 'Джуниор',
      salary: '300k в секунду',
      company: 'Tesla',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Ilon Mask',
      contact_phone: '666',
      contact_social: '@Ilon_Mask',
      experience: 'Без опыта',
      about_company: 'Отправляем людей и товары в космос',
      about_project: 'Разработка автопилота для starship',
      duties: 'Написание CSS для интерфейса кабины пилота',
      requirements: 'что-то тут должно быть',
      technology: 'CSS5',
      conditions: 'что-то тут должно быть',
      city: 'Moscow',
      user_id: '1',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vacancies', null, {});
  }
};
