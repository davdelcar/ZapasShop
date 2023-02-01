import { db } from "../db/database.js";
import { Sequelize, DataTypes } from "sequelize";

export const CartShoe = db.define('CartShoe' , {
    quantity:{
        type: DataTypes.INTEGER
    },
    size:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {timestamps: false})