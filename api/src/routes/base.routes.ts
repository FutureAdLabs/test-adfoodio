import { Router } from 'express'
const router = Router()
import {getFoods, createFood, getFood, deleteFood, updateFood} from '../controllers/food.controller'

import {getUsers, newUser} from '../controllers/user.controller'

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