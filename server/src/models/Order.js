import { db } from "../db/database.js";
import { Sequelize, DataTypes } from "sequelize";

export const Order = db.define('Order' , {
    total:{
        type: DataTypes.INTEGER
    },
    purchaseDate:{
        type: DataTypes.DATE
    }
})