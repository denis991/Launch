module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vacancies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      schedule: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      contact_name: {
        type: Sequelize.STRING
      },
      contact_phone: {
        type: Sequelize.STRING
      },
      contact_social: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      about_company: {
        type: Sequelize.STRING
      },
      about_project: {
        type: Sequelize.STRING
      },
      duties: {
        type: Sequelize.STRING
      },
      requirements: {
        type: Sequelize.STRING
      },
      technology: {
        type: Sequelize.STRING
      },
      conditions: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('Vacancies');
  }
};
