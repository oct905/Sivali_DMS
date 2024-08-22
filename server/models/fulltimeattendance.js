'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FullTimeAttendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FullTimeAttendance.init({
    date: DataTypes.DATEONLY,
    name: DataTypes.STRING,
    shiftIn: DataTypes.TIME,
    checkIn: DataTypes.TIME,
    shiftOut: DataTypes.TIME,
    checkOut: DataTypes.TIME,
    jobName: DataTypes.STRING,
    jobDescription: DataTypes.TEXT,
    locationIn: DataTypes.STRING,
    locationOut: DataTypes.STRING,
    photoIn: DataTypes.STRING,
    photoOut: DataTypes.STRING,
    CompanyId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FullTimeAttendance',
  });
  return FullTimeAttendance;
};