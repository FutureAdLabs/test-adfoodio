import express from 'express';
import ControllerMenu from './../controllers/menu-controllers';

const router = express.Router();


router
    .get("/", function(_, res) {
        res.type('text/plain').send("Please go to /api/products to see the products");
    })
    .get('/api/products', ControllerMenu.getMenu)
    .get('/api/products/:id', ControllerMenu.getProduct)

export default router;