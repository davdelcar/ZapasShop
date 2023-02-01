import { Router } from "express";
import * as UserController from "../controllers/UserController.js";

const router = Router();

router.get("/", UserController.getUsers)

router.get("/:id", UserController.getUserById)

router.put("/:id", UserController.updateUser)

router.delete("/:id", UserController.deleteUser)

router.post("/new", UserController.createUser)

export default router;