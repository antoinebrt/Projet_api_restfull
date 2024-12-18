const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Reservation = sequelize.define('Reservation', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
    defaultValue: 'pending'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
});

module.exports = Reservation;