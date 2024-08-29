'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('COMPANY_PARTNER', {
      companyId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_industry: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_size: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_photo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      company_address: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      company_email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      company_phone_number: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('COMPANY_PARTNERs');
  }
};