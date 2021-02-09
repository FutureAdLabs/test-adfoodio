import { Router } from 'express'
const router = Router()
import {getFoods, createFood, getFood, deleteFood, updateFood} from '../controllers/food.controller'

import {getUser, newUser} from '../controllers/user.controller'
import {newOrder} from '../controllers/order.controller'


router.route('/newOrder')
    .post(newOrder)
    

router.route('/newUser')
    .post(newUser)
    
router.route('/getUser')
    .post(getUser)

router.route('/')
    .get(getFoods)
    .post(createFood)

router.route('/:foodId')
    .get(getFood)
    .post(deleteFood)
    .put(updateFood)


export default router