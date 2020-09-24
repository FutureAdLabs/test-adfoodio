import { Router } from 'express';
const router = Router()

import {
  getFoods,
  createFood,
  getFood,
  updateFood,
  deleteFood
} from '../controllers/food.controller';


router.get('/foods', getFoods);
router.post('/foods', createFood);
router.get('/foods/:id', getFood);
router.put('/foods', updateFood);
router.delete('/foods/:id', deleteFood);



export default router