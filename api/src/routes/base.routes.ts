import { Router } from 'express'
const router = Router()
import {getFoods, createFood, getFood, deleteFood, updateFood} from '../controllers/food.controller'

import {getUsers, newUser} from '../controllers/user.controller'
import {newOrder} from '../controllers/order.controller'


router.route('/newOrder')
    .post(newOrder)
    

router.route('/newUser')
    .post(newUser)
    
router.route('/getUsers')
    .get(getUsers)

router.route('/')
    .get(getFoods)
    .post(createFood)

router.route('/:foodId')
    .get(getFood)
    .post(deleteFood)
    .put(updateFood)


export default router