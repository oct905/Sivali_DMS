'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FullTimeAttendance extends Model {
    static associate(models) {
      this.belongsTo(models.Company, {
        foreignKey: 'CompanyId'
      });
    }
  }
  FullTimeAttendance.init({
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name is required"
        },
        notEmpty: {
          msg: "Name is required"
        }
      }
    },
    shiftIn: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Shift In time is required"
        },
        notEmpty: {
          msg: "Shift In time is required"
        }
      }
    },
    checkIn: {
      type: DataTypes.TIME,
      allowNull: true
    },
    shiftOut: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Shift Out time is required"
        },
        notEmpty: {
          msg: "Shift Out time is required"
        }
      }
    },
    checkOut: {
      type: DataTypes.TIME,
      allowNull: true
    },
    jobName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Job name is required"
        },
        notEmpty: {
          msg: "Job name is required"
        }
      }
    },
    jobDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Job description is required"
        },
        notEmpty: {
          msg: "Job description is required"
        }
      }
    },
    locationIn: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Location In is required"
        },
        notEmpty: {
          msg: "Location In is required"
        }
      }
    },
    locationOut: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photoIn: {
      type: DataTypes.STRING,
      allowNull: true
    },
    photoOut: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CompanyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Companies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      validate: {
        notNull: {
          msg: "Company ID is required"
        },
        notEmpty: {
          msg: "Company ID is required"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'FullTimeAttendance',
  });
  return FullTimeAttendance;
};
