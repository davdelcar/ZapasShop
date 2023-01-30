import { Router } from "express";
import { where } from "sequelize";
import { User } from "../models/User.js";

const router = Router();

router.get("/", async(req , res) =>{
    const user = await User.findAll();
    res.json(user);
})

router.get("/:id", async(req, res)=>{
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);
        
    } catch (error) {
        res.status(404)
        console.error(error)
    }
})

router.put("/:id", async(req, res) =>{
    try {
        await User.update(req.body, {where: {id: req.params.id}});
        const updatedUser = await User.findByPk(req.params.id)
        updatedUser == null ? res.status(404).json("User not found") : res.json(updatedUser);
    } catch (error) {
        res.status(404)
        console.error(error);
        
    }
})

router.delete("/:id", async(req, res) =>{
    try {
        const user = await User.findByPk(req.params.id)
        if(user == null) res.status(404).json("User not found")
        else { 
            await User.destroy({where: {id: req.params.id}})
            res.json("User was deleted")
        }
       
    } catch (error) {
        res.status(404)
        console.error(error)
        
    }
})

router.post("/new",  async(req, res) => {
    const {username, name, lastname, birthdate,email,password} = req.body;
  try {
    const newUser = await User.create({username, name, lastname, email, birthdate,password});
    res.json(newUser);
  } catch (error) {
    res.status(400).json({"error": error.errors[0].message});
    console.error(error);
  }
})

export default router;