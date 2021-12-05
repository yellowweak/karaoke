'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AiScoreRecords', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      songRequestNo: { // TODO: move to other table later
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sangAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      totalScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bonusScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rawScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      aiPositiveScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      aiMinusScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      aiFinalScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      pitchScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      expressivenessScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      stabilityScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      rhythmScore: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      vibratoLongtoneScore: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AiScoreRecords');
  }
};