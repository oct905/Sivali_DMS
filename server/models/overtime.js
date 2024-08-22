'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Overtime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, {
        foreignKey: 'CompanyId'
      })
    }
  }
  Overtime.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Full name is required"
        },
        notEmpty: {
          msg: "Full name is required"
        }
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Date is required"
        },
        notEmpty: {
          msg: "Date is required"
        }
      }
    },
    hour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Hour is required"
        },
        notEmpty: {
          msg: "Hour is required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Description is required"
        },
        notEmpty: {
          msg: "Description is required"
        }
      }
    },
    created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Created date is required"
        },
        notEmpty: {
          msg: "Created date is required"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Status is required"
        },
        notEmpty: {
          msg: "Status is required"
        }
      }
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Company ID is required"
        },
        notEmpty: {
          msg: "Company ID is required"
        }
      },
      references: {
        model: 'Company',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Overtime',
  });
  return Overtime;
};