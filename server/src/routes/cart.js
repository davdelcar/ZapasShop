import { Router } from 'express'
import * as CartController from '../controllers/CartController.js'

const router = Router()

router.get('/:userId', CartController.getCartByUserId)

router.post('/add', CartController.addShoesToCartByUserId)

export default router
