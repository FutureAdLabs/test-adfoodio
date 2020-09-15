import express from 'express';

const router = express.Router();


router
    .get("/", function(_, res) {
        res.type('text/plain').send("Food can be served");
      })
    .get("/drinks", (req,res)=>{
        res.type('text/plain').send("Drinks can be served")
    });

export default router;