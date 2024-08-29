'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CITY extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CITY.init({
    cityId: DataTypes.INTEGER,
    city: DataTypes.STRING,
    districtId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CITY',
  });
  return CITY;
};