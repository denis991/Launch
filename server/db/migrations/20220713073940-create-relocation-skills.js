'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Relocation_Skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reloc_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Relocations',
          key: 'id',
        },
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
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
    await queryInterface.dropTable('Relocation_Skills');
  }
};
