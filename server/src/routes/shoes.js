import { Router } from 'express'
import * as ShoesController from '../controllers/ShoesController.js'

const router = Router()

router.get('/', ShoesController.getShoes)

router.get('/:id', ShoesController.getShoesById)

router.put('/:id', ShoesController.updateShoes)

router.delete('/:id', ShoesController.deleteShoes)

router.post('/new', ShoesController.createShoes)

export default router
