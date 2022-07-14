'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CVComms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      this.belongsTo(Users, { foreignKey: 'user_id' })
    }
  }
  CVComms.init({
    body: DataTypes.STRING,
    cv_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CVComms',
  });
  return CVComms;
};
