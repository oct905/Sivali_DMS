'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AttendanceType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AttendanceType.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    mandatoryLocation: DataTypes.BOOLEAN,
    CompanyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AttendanceType',
  });
  return AttendanceType;
};