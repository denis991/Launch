'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Vacancies, Skills }) {
      this.belongsTo(Vacancies, { foreignKey: 'vacancy_id' })
      this.belongsTo(Skills, { foreignKey: 'skill_id' })
    }
  }
  Materials.init({
    material: DataTypes.STRING,
    vacancy_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materials',
  });
  return Materials;
};
