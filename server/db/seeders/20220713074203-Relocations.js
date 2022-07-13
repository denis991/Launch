module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Relocations', [{
      title: 'Junior Software Engineer, Backend',
      country: 'Netherlands',
      level: 'junior',
      body: 'As the software engineer at EVBox, you contribute to our solutions while being a member of one of the teams working on a particular product domain.',
      url: 'https://relocate.me/the-netherlands/amsterdam/evbox/software-engineer-backend-8800'
    },
    {
      title: 'Intern Applied Machine Learning',
      country: 'Japan',
      level: 'intern',
      body: 'Machine learning on news ranking is crucial for analyzing millions of articles every day to deliver the most engaging high-quality information in near-real-time while providing a "Personalized Discovery" experience to our users.',
      url: 'https://relocate.me/japan/tokyo/smartnews/tech-lead-applied-machine-learning-news-ranking-8883'
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Relocations', null, {});
  }
};
