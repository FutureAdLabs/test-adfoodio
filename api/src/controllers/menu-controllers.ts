import Menu from '../models/menu-models';


const ControllerMenu = () =>{

};

ControllerMenu.getMenu = (req: any, res:any)=>{
    Menu.getMenu( (err:any, result:any)=>{
        if(err) throw err;
        res.send(result)
    });
}

ControllerMenu.getProduct = (req: any, res:any)=>{
    Menu.getMenu( (err:any, result:any)=>{ //le voy  sacar con el mismo metodo pero pasandole un filtro al array
        if(err) throw err;
        const productId = req.params.id;
        const product = result.find( (x: { _id: number; }) => x._id == productId);
        if(product){
            res.send(product);
        }else{
            res.status(404).send({message: "Sorry!!. Product not found."})
        }
               
    });
}


export default  ControllerMenu;