import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {productDetailsReducer, productListReducer} from './reducers/productReducers';
import {cartReducer} from './reducers/cartReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { userSigninReducer } from './reducers/userReducers';

//accediendo a la cookie:
const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = {cart: {cartItems}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;