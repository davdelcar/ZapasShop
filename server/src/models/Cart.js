import { DataTypes } from 'sequelize'
import { db } from '../db/database.js'

export const Cart = db.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
}, { timestamps: true })
