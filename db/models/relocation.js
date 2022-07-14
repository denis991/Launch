const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Skills }) {
      this.belongsToMany(Skills, { through: 'Relocation_Skills' });
    }
  }
  Relocation.init({
    title: DataTypes.STRING,
    lang: DataTypes.STRING,
    country: DataTypes.STRING,
    level: DataTypes.STRING,
    body: DataTypes.TEXT,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Relocation',
  });
  return Relocation;
};
