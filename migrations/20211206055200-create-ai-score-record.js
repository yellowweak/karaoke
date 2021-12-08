"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("ai_score_records", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      song_request_no: {
        // TODO: move to other table later
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      sang_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      total_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      bonus_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      raw_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ai_positive_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ai_minus_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ai_final_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pitch_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      expressiveness_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      stability_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      rhythm_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      vibrato_longtone_score: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE(6),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE(6),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable("ai_score_records");
  },
};
