'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PartTimeAttendances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY,
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
        type: Sequelize.STRING,
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
        type: Sequelize.TIME,
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
        type: Sequelize.TIME
      },
      shiftOut: {
        type: Sequelize.TIME,
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
        type: Sequelize.TIME
      },
      jobName: {
        type: Sequelize.STRING,
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
        type: Sequelize.TEXT,
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
        type: Sequelize.STRING,
      },
      locationOut: {
        type: Sequelize.STRING
      },
      photoIn: {
        type: Sequelize.STRING
      },
      photoOut: {
        type: Sequelize.STRING
      },
      CompanyId: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('PartTimeAttendances');
  }
};
