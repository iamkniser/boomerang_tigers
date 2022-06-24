const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Session.init({
    time: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    enemy_id: {
      types: DataTypes.INTEGER,
      references: {
        model: 'Enemies',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Session',
  });
  return Session;
};
