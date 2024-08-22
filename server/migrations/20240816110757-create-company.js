'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: 'Email already registered'
        },
        validate: {
          notNull: {
            msg: "Email is required"
          },
          notEmpty: {
            msg: "Email is required"
          },
          isEmail: {
            msg: "Must be a valid email address."
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required"
          },
          notEmpty: {
            msg: "Password is required"
          },
          len: {
            args: [5],
            msg: "Password must be at least 5 characters long."
          }
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Company name is required"
          },
          notEmpty: {
            msg: "Company name is required"
          }
        }
      },
      industry: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Industry is required"
          },
          notEmpty: {
            msg: "Industry is required"
          }
        }
      },
      companySize: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Company size is required"
          },
          notEmpty: {
            msg: "Company size is required"
          }
        }
      },
      phoneCompany: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Phone company is required"
          },
          notEmpty: {
            msg: "Phone company is required"
          }
        }
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Position is required"
          },
          notEmpty: {
            msg: "Position is required"
          }
        }
      },
      fullName: {
        type: Sequelize.STRING,
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
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Phone number is required"
          },
          notEmpty: {
            msg: "Phone number is required"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};