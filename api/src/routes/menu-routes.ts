import express from 'express';
import ControllerMenu from './../controllers/menu-controllers';

const router = express.Router();


router
    .get('/', ControllerMenu.getMenu)
    //.get("/", function(_, res) {
       // res.type('text/plain').send("Food can be served");
     // })
    .get("/drinks", (req,res)=>{
        res.type('text/plain').send("Drinks can be served")
    });

export default router;