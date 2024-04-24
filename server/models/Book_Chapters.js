const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Publications = require('./Publications');

const Book_Chapters = sequelize.define('Book_Chapters', {
    
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  year: {
    type: DataTypes.INTEGER,
  },
  isbn: {
    type: DataTypes.STRING,
  },
  pub_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Publications,
        key: 'id'
      }
  }
}, {
  timestamps: false // Exclude createdAt and updatedAt columns
});

module.exports = Book_Chapters;
