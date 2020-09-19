import Menu from '../models/menu-models';


const ControllerMenu = () =>{

};

ControllerMenu.getMenu = (req: any, res:any)=>{
    Menu.getMenu( (err:any, result:any,)=>{
        if(err) throw err;
        console.log("result viene así: ", result);
        res.send(result)
        //res.json({products: result});
    }
    );
}


export default  ControllerMenu;