import { Router } from 'express';
const router = Router()

import {
  getCostumer,
  createCostumer,
  getCostumers,
  updateCostumer,
  deleteCostumer
} from '../controllers/costumer.controller';


router.get('/costumers', getCostumers);
router.post('/costumers', createCostumer);
router.get('/costumers/:id', getCostumer);
router.put('/costumers', updateCostumer);
router.delete('/costumers/:id', deleteCostumer);



export default router