import { db } from "../db/database.js";
import { Sequelize, DataTypes } from "sequelize";
import { Order } from "./Order.js";
import { Cart } from "./Cart.js";

export const User = db.define("User",{
    username:{
        type: DataTypes.STRING,
        unique:true,
        allowNull: false,
        validate:{
            notNull:{
                msg: "Please enter a correct username"
            }
        }
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg: "Please enter your name"
            }
        }
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull:{
                msg: "Please enter your lastname"
            }
        }
    },
    email:{
        type: DataTypes.STRING,
        validate:{
            isEmail: {
                msg : "Please enter a correct email"
            }
        }
    },
    address:{
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    }
},{timestamps: false})

User.hasMany(Order)
Order.belongsTo(User)
User.hasOne(Cart)
Cart.belongsTo(User)