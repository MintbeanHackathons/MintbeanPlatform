'use strict';
module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('Developer', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    profiles: DataTypes.JSON,
    contactMethods: DataTypes.JSON,
    technologies: DataTypes.JSON
  }, {});
  Developer.associate = function (models) {
    // associations can be defined here
    const { Attendance, Developer, Experience } = models;
    Developer.hasMany(Attendance);
    Developer.belongsToMany(Experience, { through: 'Attendance' });
  };
  return Developer;
};
