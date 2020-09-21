import userModel from '../models/user-model';
import { getToken } from '../../util';

const ControllerAuth = () => {

};

ControllerAuth.createAdmin = (req: any, res:any) => {
    const user = {
        id : 0,
        name: 'Ronald',
        phone: '666777888',
        email: 'ronaldpineda@gmail.com',
        password: '12345',
        isAdmin: true
    }
    console.log("se va registrar:",user);
    userModel.save(user, (err: any, data: any)=>{
        if(err) {
            res.send({msg: err.message});
        }else{
            console.log(data)
            res.send(user);
        }      
    } )

};

ControllerAuth.signin = (req: any, res:any) => {
    
    const signinUser = {
        email: req.body.email,
        password: req.body.password
    }
    userModel.findUser(signinUser, (err:any, data: any)=>{
        if(err) {
            res.status(401).send({msg: "Invalid Email or Password.  Please try again"})
        }else{
            console.log('el data viene así:', data)
            res.send({
                id: data.id,
                name: data.name,
                phone: data.phone,
                email: data.email,
                isAdmin: data.isAdmin,
                token: getToken(signinUser)
            });
        }      
    })

}

export default ControllerAuth;