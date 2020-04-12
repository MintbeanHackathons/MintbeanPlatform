'use strict';

const percentage = DataTypes => ({
  type: DataTypes.INTEGER,
  validate: {
    min: 0,
    max: 100
  }
});

module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    DeveloperId: DataTypes.INTEGER,
    ExperienceId: DataTypes.INTEGER,
    aesthetics: percentage(DataTypes),
    codeQuality: percentage(DataTypes),
    codeReview: percentage(DataTypes),
    isScored: {
      type: DataTypes.VIRTUAL,
      get () {
        let isScored = true;
        [this.aesthetics, this.codeQuality, this.codeReview].forEach((categoryScore) => {
          if (!categoryScore && categoryScore !== 0) {
            isScored = false;
          }
        });

        return isScored;
      },
      set () {
        throw new Error('isScored is a calculated value and cannot be set directly.');
      }
    },
    score: {
      type: DataTypes.VIRTUAL,
      get () {
        if (!this.isScored) {
          return null;
        } else {
          const categories = [this.aesthetics, this.codeQuality, this.codeReview];
          const sum = categories.reduce((prev, curr) => prev + curr, 0);
          return Math.floor(sum / categories.length);
        }
      },
      set () {
        throw new Error('Score is a calculated value and cannot be set directly.');
      }
    }
  }, {});
  Attendance.associate = function (models) {
    // associations can be defined here
    const { Attendance, Developer, Experience } = models;
    Attendance.belongsTo(Developer, { foreignKey: 'DeveloperId' });
    Attendance.belongsTo(Experience, { foreignKey: 'ExperienceId' });
  };
  return Attendance;
};
