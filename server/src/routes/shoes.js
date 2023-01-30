import { Router } from "express";
import { Shoe } from "../models/Shoe.js";

const router = Router()

router.get('/', async(req, res) =>{
    
    const shoe = await Shoe.findAll();
    res.json(shoe);
})

router.get("/:id", async(req, res)=>{
    try {
        const shoe = await Shoe.findByPk(req.params.id);
        if(shoe === null){
            res.json("User not found");
        }else{
            res.json(shoe);
        }
    } catch (error) {
        res.status(404)
        console.error(error)
    }
})

router.put("/:id", async(req, res) =>{
    try {
        await Shoe.update(req.body, {where: {id: req.params.id}});
        const updatedShoe = await Shoe.findByPk(req.params.id)
        updatedUser == null ? res.status(404).json("Shoe not found") : res.json(updatedShoe);
    } catch (error) {
        res.status(404)
        console.error(error);
        
    }
})
router.delete("/:id", async(req, res) =>{
    try {
        const shoe = await Shoe.findByPk(req.params.id)
        if(shoe == null) res.status(404).json("Shoe not found")
        else { 
            await Shoe.destroy({where: {id: req.params.id}})
            res.json("Shoe was deleted")
        }
       
    } catch (error) {
        res.status(404)
        console.error(error)
        
    }
})


router.post("/new", async(req,res) =>{
    const {name, brand, size, quantity, description} = req.body;
    try {
        const newShoe = await Shoe.create({name, brand, size, quantity, description});
        res.json(newShoe);
        
    } catch (error) {
        res.sendStatus(404).json(error);
        console.log(error);
    }
    
})

export default router;