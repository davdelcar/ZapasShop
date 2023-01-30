import express from "express";
import shoes from "./src/routes/shoes.js";
import cors from "cors";
import users from "./src/routes/users.js"
import morgan from "morgan";
import { dbConection } from "./src/db/database.js";
import carts from './src/routes/cart.js';
const app = express();
app.use(express.json())
app.use("/shoes", shoes);
app.use("/users", users)
app.use("/carts", carts)
app.use(cors());
app.use(morgan('dev'))
dbConection()
app.listen(4000, ()=>{
    console.log("Server running on http://localhost:4000")
    
});