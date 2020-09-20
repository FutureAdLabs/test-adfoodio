import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";


function cartReducer( state = {cartItems: []}, action) {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload; //cantidad inicial en el cart
            const product = state.cartItems.find(x => x.product === item.product);
            
            //si inserto un nuevo producto que ya esxiste en el cart:
            if(product) { 
                return {cartItems: state.cartItems.map(x=> x.product === product.product ?item : x)} //actualizo el nuevo estado con el nuemro actual de productos en el cart
            }
            return { cartItems: [...state.cartItems, item] };
        
        case CART_REMOVE_ITEM:
            return {cartItems: state.cartItems.filter(x => x.product !== action.payload)}

        default:
            return state; 
    }

}

export { cartReducer};