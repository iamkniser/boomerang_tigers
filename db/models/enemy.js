'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Enemy.init({
    health: DataTypes.INTEGER,
    speed: DataTypes.INTEGER,
    bonus_score: DataTypes.INTEGER,
    statistic_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enemy',
  });
  return Enemy;
};