import Axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

//para agregar al carrito
const addToCart = (productId, quantity) => async (dispatch) => {

    try{
        const {data} = await Axios.get('/api/products/'+productId);
        dispatch({type: CART_ADD_ITEM, payload: {
            product : data._id,
            name: data.product,
            image: data.image,
            price: data.price,
            quantity
        }})
    }catch(error){

    }
};

//para eliminar del carrito
const removeFromCart = (productId) => (dispatch) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId})
}


export {addToCart, removeFromCart};