import Axios from "axios"
import { CART_ADD_ITEM } from "../constants/cartConstants";

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

export {addToCart};