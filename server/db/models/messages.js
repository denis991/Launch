'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Rooms, Users }) {
      this.belongsTo(Rooms, { foreign_key: 'room_id' });
      this.belongsTo(Users, { foreign_key: 'user_id' });
    }
  }
  Messages.init({
    body: DataTypes.STRING,
    room_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};
