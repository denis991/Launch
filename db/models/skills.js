'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Vacancies, CVs, Materials, Relocation }) {
      this.belongsToMany(Vacancies, { through: 'Vacancies_Skills' });
      this.belongsToMany(CVs, { through: 'Vacancies_Skills' });
      this.hasMany(Materials, { foreignKey: 'skill_id' });
      this.belongsToMany(Relocation, { through: 'Relocation_Skills' });
    }
  }
  Skills.init(
    {
      skill: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Skills',
    }
  );
  return Skills;
};
