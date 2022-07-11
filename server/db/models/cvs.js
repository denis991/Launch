'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CVs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Skills }) {
      this.belongsTo(Users, { foreignKey: 'user_id' });
      this.belongsToMany(Skills, { through: 'CV_Skills' });
      this.belongsToMany(Users, { through: 'CVs_Responses' });
    }
  }
  CVs.init({
    title: DataTypes.STRING,
    elbrus: DataTypes.BOOLEAN,
    github: DataTypes.STRING,
    contact: DataTypes.STRING,
    body: DataTypes.STRING,
    awards: DataTypes.STRING,
    education: DataTypes.STRING,
    experience: DataTypes.STRING,
    views: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CVs',
  });
  return CVs;
};
