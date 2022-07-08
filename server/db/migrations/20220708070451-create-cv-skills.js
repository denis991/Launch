'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CV_Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
          key: 'id',
        },
      },
      cv_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CVs',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CV_Skills');
  }
};
