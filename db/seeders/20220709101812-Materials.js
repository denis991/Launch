module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Materials', [
      { material: 'https://htmldog.com/guides/html/advanced/', skill_id: 1 },
      { material: 'https://htmldog.com/guides/css/advanced/', skill_id: 1 },
      { material: 'https://www.youtube.com/watch?v=Ae-r8hsbPUo', skill_id: 2 },
      { material: 'Задачи на Codewars 4-6 kyu', skill_id: 2 },
      { material: 'Задачи на Codewars 4-6 kyu', skill_id: 3 },
      { material: 'https://www.kaggle.com/learn/advanced-sql', skill_id: 3 },
      { material: 'https://www.freecodecamp.org/news/learn-typescript-beginners-guide/', skill_id: 4 },
      { material: 'https://dzone.com/articles/7-advanced-c-concepts-you-should-know', skill_id: 6 },
      { material: 'https://realpython.com/tutorials/advanced/', skill_id: 7 },
      { material: 'Задачи на Codewars 4-6 kyu', skill_id: 7 },
      { material: 'https://www.kaggle.com/learn/advanced-sql', skill_id: 15 },
      { material: 'https://www.youtube.com/watch?v=zrs7u6bdbUw', skill_id: 26 },

    ]);
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Materials', null, {});

  }
};
