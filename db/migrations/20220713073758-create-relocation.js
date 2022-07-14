module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Relocations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      lang: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Relocations');
  }
};
