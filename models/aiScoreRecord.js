'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AiScoreRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AiScoreRecord.init({
    songRequestNo: DataTypes.INTEGER, // TODO: move to other table later
    sangAt: DataTypes.DATE,
    totalScore: DataTypes.INTEGER,
    bonusScore: DataTypes.INTEGER,
    rawScore: DataTypes.INTEGER,
    aiPositiveScore: DataTypes.INTEGER,
    aiMinusScore: DataTypes.INTEGER,
    aiFinalScore: DataTypes.INTEGER,
    pitchScore: DataTypes.INTEGER, // 音程
    expressivenessScore: DataTypes.INTEGER, // 表現力
    stabilityScore: DataTypes.INTEGER, // 安定性
    rhythmScore: DataTypes.INTEGER, // リズム
    vibratoLongtoneScore: DataTypes.INTEGER, // VL
  }, {
    sequelize,
    modelName: 'AiScoreRecord',
    underscored: true,
  });
  return AiScoreRecord;
};