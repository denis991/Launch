const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vacancies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Materials, Skills }) {
      this.belongsTo(Users, { foreignKey: 'user_id' });
      this.hasMany(Materials, { foreignKey: 'vacancy_id' });
      this.belongsToMany(Skills, { through: 'Vacancies_Skills' });
      this.belongsToMany(Users, { through: 'Vacancies_Responses' });
    }
  }
  Vacancies.init({
    title: DataTypes.STRING,
    level: DataTypes.STRING,
    salary: DataTypes.STRING,
    company: DataTypes.STRING,
    schedule: DataTypes.STRING,
    url: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_phone: DataTypes.STRING,
    contact_social: DataTypes.STRING,
    experience: DataTypes.STRING,
    about_company: DataTypes.STRING,
    about_project: DataTypes.STRING,
    duties: DataTypes.STRING,
    requirements: DataTypes.STRING,
    technology: DataTypes.STRING,
    conditions: DataTypes.STRING,
    city: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Vacancies',
  });
  return Vacancies;
};
