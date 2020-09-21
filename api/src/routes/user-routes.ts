import express from 'express';
import ControllerAuth from './../controllers/user-controller';


const router = express.Router();

router
    .get('/api/users/createadmin', ControllerAuth.createAdmin)
    .post('/signin', ControllerAuth.signin)
    


export default router;
