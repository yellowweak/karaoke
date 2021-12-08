"use strict";
module.exports = {
  up: async (queryInterface) => {
    const { results: rawData } = require("../raw_data/fistia-ai.json");
    const floatStrToInt = require("../utils/floatStrToInt.js");
    let records = [];
    rawData.forEach((record) => {
      records.push({
        song_request_no: record.content.requestNumber, // TODO: move to other table later
        sang_at: new Date(record.sangAt),
        total_score: floatStrToInt(record.totalPoints),
        bonus_score: floatStrToInt(record.aiSensitivityBonusPoints),
        raw_score: floatStrToInt(record.rawPoints),
        ai_positive_score: record.aiSensitivityMeterAddPoints,
        ai_minus_score: record.aiSensitivityMeterDeductPoints,
        ai_final_score: record.aiSensitivityPoints,
        pitch_score: record.radarChart.pitchPoints, // 音程
        expressiveness_score: record.radarChart.expressionPoints, // 表現力
        stability_score: record.radarChart.stabilityPoints, // 安定性
        rhythm_score: record.radarChart.rhythmPoints, // リズム
        vibrato_longtone_score: record.radarChart.vibratosAndLongtonesPoints, // VL
        created_at: new Date(),
        updated_at: new Date(),
      });
    });
    records.sort((r1, r2) => r1.sang_at.getTime() - r2.sang_at.getTime());

    return await queryInterface.bulkInsert("ai_score_records", records);
  },

  down: async (queryInterface) => {
    return await queryInterface.bulkDelete("ai_score_records", null);
  },
};
