const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Employment = sequelize.define('Employment', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  present_position: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  date_leave: {
    type: DataTypes.STRING,
  },
  organisation: {
    type: DataTypes.STRING,
  },
  date_join: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  isExperience: {
    type: DataTypes.BOOLEAN,
  },
  area_special: {
    type: DataTypes.TEXT,
  },
  current_area: {
    type: DataTypes.TEXT,
  },
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Employment;