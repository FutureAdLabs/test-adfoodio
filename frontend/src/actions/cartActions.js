import Axios from "axios";
import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

//para agregar al carrito
const addToCart = (productId, quantity) => async (dispatch, getState) => {

    try{
        const {data} = await Axios.get('/api/products/'+productId);
        dispatch({type: CART_ADD_ITEM, payload: {
            product : data._id,
            name: data.product,
            image: data.image,
            price: data.price,
            quantity
        }});

        const {cart: {cartItems}} = getState();
        Cookie.set('cartItems', JSON.stringify(cartItems)); //me almacena el numero de items en el cart dentro de la cookie

    }catch(error){

    }
};

//para eliminar del carrito
const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, payload: productId});

    const {cart: {cartItems}} = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));
}


export {addToCart, removeFromCart};