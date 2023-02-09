import { User, Cart } from '../models/index.js'

export const getUsers = async (req, res) => {
  const user = await User.findAll()
  res.json(user)
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(404)
    console.error(error)
  }
}

export const createUser = async (req, res) => {
  const { username, name, lastname, email, address, password } = req.body
  try {
    const newUser = await User.create({ username, name, lastname, email, address, password })
    await Cart.create({ UserId: newUser.id })
    const newUserWithCart = await User.findOne({ where: { id: newUser.id }, include: { model: Cart } })
    res.json(newUserWithCart)
  } catch (error) {
    res.status(500).json({ error: error.errors[0].message })
    console.error(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.params.id } })
    const updatedUser = await User.findByPk(req.params.id)
    updatedUser == null ? res.status(404).json('User not found') : res.json(updatedUser)
  } catch (error) {
    res.status(404)
    console.error(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user == null) res.status(404).json('User not found')
    else {
      await User.destroy({ where: { id: req.params.id } })
      res.json('User was deleted')
    }
  } catch (error) {
    res.status(404)
    console.error(error)
  }
}
