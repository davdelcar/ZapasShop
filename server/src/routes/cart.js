import { Router } from "express";
import { Cart } from "../models/Cart.js";

const router = Router()

router.get("/",async(req, res)=>{
    try {
        const carts = await Cart.findAll()
        if(!carts) res.status(404).json({message: "Carts not found"})
        else res.status(200).json(carts)
    } catch (error) {
        res.status(500)
        console.error(error)
    }

})

export default router;