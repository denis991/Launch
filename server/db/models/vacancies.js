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
    title: DataTypes.STRING, // Название вакансии
    level: DataTypes.STRING, // Уровень занятости
    salary: DataTypes.STRING, // Зарплата
    company: DataTypes.STRING, // Компания
    schedule: DataTypes.STRING, //  График работы
    url: DataTypes.STRING, // Ссылка на резюме
    contact_name: DataTypes.STRING, // Имя контактного лица
    contact_phone: DataTypes.STRING, // Телефон контактного лица
    contact_social: DataTypes.STRING, // Ссылка на социальную сеть
    experience: DataTypes.STRING, // Опыт работы
    about_company: DataTypes.STRING, // О компании
    about_project: DataTypes.STRING, // О проекте
    duties: DataTypes.STRING, // Обязанности
    requirements: DataTypes.STRING, // Требования
    technology: DataTypes.STRING, // Технологии
    conditions: DataTypes.STRING, // Условия
    city: DataTypes.STRING, // Город
    user_id: DataTypes.INTEGER, // Идентификатор пользователя
  }, {
    sequelize,
    modelName: 'Vacancies',
  });
  return Vacancies;
};
