import { Router } from "express";
import { Cart } from "../models/Cart.js";
import * as CartController from "../controllers/CartController.js";

const router = Router()

router.get("/:userId", CartController.getCartByUserId)

router.post("/add", CartController.addShoesToCartByUserId)

export default router;