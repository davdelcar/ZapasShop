import { db } from "../db/database.js";
import { Sequelize, DataTypes } from "sequelize";

export const CartShoe = db.define('CartShoe' , {
    quantity:{
        type: DataTypes.INTEGER
    }
}, {timestamps: false})