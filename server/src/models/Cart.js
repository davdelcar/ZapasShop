import { DataTypes, Sequelize } from "sequelize";
import { db } from "../db/database.js";
import { CartShoe } from "./CartShoe.js";
import { Shoe } from "./Shoe.js";
import { User } from "./User.js";

export const Cart = db.define('Cart', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},{timestamps: true})
