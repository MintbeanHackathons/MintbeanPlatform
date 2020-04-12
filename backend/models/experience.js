'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    experienceDate: DataTypes.DATE,
    externalLinks: DataTypes.JSON
  }, {});
  Experience.associate = function (models) {
    // associations can be defined here
    const { Attendance, Developer, Experience } = models;
    Experience.hasMany(Attendance);
    Experience.belongsToMany(Developer, { through: 'Attendance' });
  };
  return Experience;
};
