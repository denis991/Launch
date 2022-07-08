'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users }) {
      this.belongsTo(Users, { foreignKey: 'user_id' })
    }
  }
  Notifications.init({
    body: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Notifications',
  });
  return Notifications;
};
