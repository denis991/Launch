'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserComms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Notifications }) {
      this.belongsTo(Users, { foreignKey: 'user_id' });
      this.belongsTo(Users, { foreignKey: 'couch_id' });
      this.belongsToMany(Notifications, { through: 'User_Comms_Notifications' });
    }
  }
  UserComms.init({
    body: DataTypes.STRING,
    couch_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserComms',
  });
  return UserComms;
};
