import { Shoe } from '../models/Shoe.js'
import { Stock } from '../models/Stock.js'

export const getShoes = async (req, res) => {
  const shoe = await Shoe.findAll()
  res.json(shoe)
}

export const getShoesById = async (req, res) => {
  try {
    const shoe = await Shoe.findByPk(req.params.id)
    if (shoe === null) {
      res.json('Shoe not found')
    } else {
      res.json(shoe)
    }
  } catch (error) {
    res.status(404)
    console.error(error)
  }
}

export const createShoes = async (req, res) => {
  const { name, brand, color, description } = req.body
  try {
    const newShoe = await Shoe.create({ name, brand, color, description })
    await Stock.bulkCreate([
      { quantity: 5, size: 40, ShoeId: newShoe.id },
      { quantity: 5, size: 41, ShoeId: newShoe.id },
      { quantity: 5, size: 42, ShoeId: newShoe.id },
      { quantity: 5, size: 43, ShoeId: newShoe.id },
      { quantity: 5, size: 44, ShoeId: newShoe.id },
      { quantity: 5, size: 45, ShoeId: newShoe.id }], { validate: true })
    res.json(newShoe)
  } catch (error) {
    res.status(500).json(error)
    console.log(error)
  }
}

export const updateShoes = async (req, res) => {
  try {
    await Shoe.update(req.body, { where: { id: req.params.id } })
    const updatedShoe = await Shoe.findByPk(req.params.id)
    updatedShoe == null ? res.status(404).json('Shoe not found') : res.json(updatedShoe)
  } catch (error) {
    res.status(404)
    console.error(error)
  }
}

export const deleteShoes = async (req, res) => {
  try {
    const shoe = await Shoe.findByPk(req.params.id)
    if (shoe == null) res.status(404).json('Shoe not found')
    else {
      await Shoe.destroy({ where: { id: req.params.id } })
      res.json('Shoe was deleted')
    }
  } catch (error) {
    res.status(404)
    console.error(error)
  }
}
