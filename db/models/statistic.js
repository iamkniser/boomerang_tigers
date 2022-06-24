const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistic.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    session_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sessions',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};
