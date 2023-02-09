import { db } from '../db/database.js'
import { DataTypes } from 'sequelize'

export const Shoe = db.define('Shoe', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, { timestamps: false })
