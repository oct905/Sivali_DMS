'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ADDRESS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ADDRESS.init({
    postal_codeId: DataTypes.INTEGER,
    street: DataTypes.STRING,
    building_number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ADDRESS',
  });
  return ADDRESS;
};