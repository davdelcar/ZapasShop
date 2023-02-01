import { Stock } from "../models/Stock.js";

export const getStocksByShoesId = async(req, res) => {
    const stock = await Stock.findAll({where: {ShoeId: req.params.shoesId}})
    try {
        if(!stock) res.status(404).json({'message': "Out of stock"})
        else res.status(200).json(stock)
    } catch (error) {
        res.status(500)
        console.error(error)
    }
}
