'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AttendanceTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      description: {
        type: Sequelize.TEXT,
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
      mandatoryLocation: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Mandatory location is required"
          },
          notEmpty: {
            msg: "Mandatory location is required"
          }
        }
      },
      CompanyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
          notNull: {
            msg: "Company ID is required"
          },
          notEmpty: {
            msg: "Company ID is required"
          }
        },
        references: {
          model: 'Companies',
          key: 'id'
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
    await queryInterface.dropTable('AttendanceTypes');
  }
};
