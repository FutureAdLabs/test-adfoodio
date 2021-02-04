import { Router } from 'express'
const router = Router()
import {getFoods, createFood, getFood, deleteFood, updateFood} from '../controllers/food.controller'


router.route('/')
    .get(getFoods)
    .post(createFood)

router.route('/:foodId')
    .get(getFood)
    .post(deleteFood)
    .put(updateFood)


export default router