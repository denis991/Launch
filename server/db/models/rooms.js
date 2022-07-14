'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Messages }) {
      this.belongsToMany(Users, { through: 'User_Rooms' });
      this.hasMany(Messages, { foreign_key: 'room_id' });
    }
  }
  Rooms.init({
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return Rooms;
};
