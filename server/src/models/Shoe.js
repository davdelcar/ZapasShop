import { db } from "../db/database.js";
import { Sequelize, DataTypes } from "sequelize";
import { Stock } from "./Stock.js";
import { CartShoe } from "./CartShoe.js";

export const Shoe = db.define('Shoe', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    size: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    quantity:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{timestamps: false});

Shoe.hasMany(Stock)
Stock.belongsTo(Shoe)

Shoe.hasMany(CartShoe)
CartShoe.belongsTo(Shoe)
