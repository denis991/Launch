'use strict';

module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Skills', [
      { skill: 'HTML and CSS' },
      { skill: 'Java' },
      { skill: 'Javascript' },
      { skill: 'Typescript' },
      { skill: 'C' },
      { skill: 'C++' },
      { skill: 'C#' },
      { skill: 'Python' },
      { skill: 'Swift' },
      { skill: 'PHP' },
      { skill: 'Golang (GO)' },
      { skill: 'Ruby' },
      { skill: 'Kotlin' },
      { skill: 'Rust' },
      { skill: 'SQL' },
      { skill: 'Delphi' },
      { skill: 'Haskell' },
      { skill: 'Perl' },
      { skill: 'Shell' },
      { skill: 'Scala' },
      { skill: 'MATLAB' },
      { skill: 'Groovy' },
      { skill: 'Lua' },
      { skill: 'PowerShell' },
      { skill: '1C' },
      { skill: 'Redux' },
      { skill: 'ReactJS' },
      { skill: 'NodeJS' },
      { skill: 'Django' },
      { skill: 'AngularJS' },
      { skill: 'VueJS' },
      { skill: 'Flask' },
      { skill: 'MySQL' },
      { skill: 'MongoDB' },
      { skill: 'Postgre SQL' },
      { skill: 'Cassandra' },
      { skill: 'jQuery' },
      { skill: 'Ruby on Rails' },
      { skill: 'Laravel' },
      { skill: 'Cake PHP' },
      { skill: 'Express JS' },
      { skill: 'Meteor' },
      { skill: 'Spring' },
      { skill: 'Koa' },
      { skill: 'Symfony' },
      { skill: 'CodeIgniter' },
      { skill: '.NET Core' },
      { skill: 'Yii' },
      { skill: 'Phoenix' },
      { skill: 'Play Framework' },
      { skill: 'Pyramid' },
      { skill: 'Vim' },

    ])
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Skills', null, {});

  }
};
