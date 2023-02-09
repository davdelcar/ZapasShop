import { db } from '../db/database.js'
import { DataTypes } from 'sequelize'

export const Stock = db.define('Stock', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: false })
