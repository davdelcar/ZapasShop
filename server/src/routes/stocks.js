import { Router } from 'express'
import * as StocksController from '../controllers/StocksController.js'

const router = Router()

router.get('/:shoesId', StocksController.getStocksByShoesId)

export default router
