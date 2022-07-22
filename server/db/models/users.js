const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Vacancies, CVs, CVComms, UserComms, Notifications, Rooms, Messages
    }) {
      this.hasMany(Vacancies, { foreignKey: 'user_id' });
      this.hasMany(CVs, { foreignKey: 'user_id' });
      this.hasMany(CVComms, { foreignKey: 'user_id' });
      this.hasMany(UserComms, { foreignKey: 'user_id' });
      this.hasMany(UserComms, { foreignKey: 'couch_id' });
      this.hasMany(Notifications, { foreignKey: 'user_id' });
      this.belongsToMany(CVs, { through: 'CVs_Responses' });
      this.belongsToMany(Vacancies, { through: 'Vacancies_Responses' });
      this.belongsToMany(Rooms, { through: 'User_Rooms' });
      this.hasMany(Messages, { foreignKey: 'user_id' });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
    }
  );
  return Users;
};
