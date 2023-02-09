import { Cart } from '../models/Cart.js'
import { CartShoe } from '../models/CartShoe.js'
import { Shoe } from '../models/Shoe.js'
import { Stock } from '../models/Stock.js'

export const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ where: { UserId: req.params.userId }, include: [{ model: CartShoe }] })
    if (!cart) res.status(404).json({ message: 'User not found' })
    else res.status(200).json(cart)
  } catch (error) {
    res.status(500)
    console.error(error)
  }
}

export const addShoesToCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ where: { UserId: req.body.userId }, include: { model: CartShoe } })
    const shoes = await Shoe.findOne({ where: { id: req.body.shoesId } })
    await CartShoe.create({ quantity: req.body.quantity, size: req.body.size, ShoeId: shoes.id, CartId: cart.id })
    const cartWhithItems = await Cart.findOne({
      where: { UserId: req.body.userId }, include: { model: CartShoe }
    })
    await Stock.increment({ quantity: -1 }, { where: { ShoeId: req.body.shoesId, size: req.body.size } })
    res.json(cartWhithItems)
  } catch (error) {
    res.status(500)
    console.error(error)
  }
}
