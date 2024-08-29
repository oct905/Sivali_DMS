'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DISTRICT extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DISTRICT.init({
    districtId: DataTypes.INTEGER,
    district: DataTypes.STRING,
    villageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DISTRICT',
  });
  return DISTRICT;
};