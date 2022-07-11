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
    }, {
      title: 'Midle Frontend Developer',
      level: 'Midle',
      salary: '400 000 ₽ ',
      company: 'nvidia',
      schedule: 'Полный рабочий день',
      url: 'best site',
      contact_name: 'Abraham Lincoln',
      contact_phone: '888',
      contact_social: '@Abraham_Lincoln',
      experience: '100лет',
      about_company: 'взламывать россию',
      about_project: 'писать программы для пво',
      duties: 'Написание знание 10 языков программирования',
      requirements: 'что-то тут должно быть',
      technology: 'CSS5, JS5',
      conditions: 'что-то тут должно быть',
      city: 'new york',
      user_id: '1',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vacancies', null, {});
  }
};
