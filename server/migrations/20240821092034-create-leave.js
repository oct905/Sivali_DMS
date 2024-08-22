'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leaves', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Type is required"
          },
          notEmpty: {
            msg: "Type is required"
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
      description: {
        type: Sequelize.STRING,
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
        type: Sequelize.DATEONLY,
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
        type: Sequelize.STRING,
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
        },
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
    await queryInterface.dropTable('Leaves');
  }
};
