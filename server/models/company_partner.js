'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class COMPANY_PARTNER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  COMPANY_PARTNER.init({
    companyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    company_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        },
        len: {
          args: [8, 100],
          msg: 'Password must be at least 8 characters long'
        }
      }
    },
    company_industry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Industry is required'
        },
        notEmpty: {
          msg: 'Industry cannot be empty'
        }
      }
    },
    company_size: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Company size is required'
        },
        notEmpty: {
          msg: 'Company size cannot be empty'
        }
      }
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Company name is required'
        },
        notEmpty: {
          msg: 'Company name cannot be empty'
        }
      }
    },
    company_photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Company photo is required'
        },
        notEmpty: {
          msg: 'Company photo cannot be empty'
        },
        isUrl: {
          msg: 'Company photo must be a valid URL'
        }
      }
    },
    company_address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Company address is required'
        },
        notEmpty: {
          msg: 'Company address cannot be empty'
        }
      }
    },
    company_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already registered'
      },
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Email cannot be empty'
        },
        isEmail: {
          msg: 'Email must be a valid email address'
        }
      }
    },
    company_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Phone number is required'
        },
        notEmpty: {
          msg: 'Phone number cannot be empty'
        },
        isNumeric: {
          msg: 'Phone number must contain only numbers'
        },
        len: {
          args: [10, 15],
          msg: 'Phone number must be between 10 and 15 digits'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'COMPANY_PARTNER',
    tableName: 'COMPANY_PARTNER',
    timestamps: true
  });

  return COMPANY_PARTNER;
};
