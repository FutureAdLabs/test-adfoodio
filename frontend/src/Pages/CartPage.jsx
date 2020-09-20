import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';


function CartPage(props){

    const productId = props.match.params.id;
    const quantity = props.location.search ? Number(props.location.search.split("=")[1]) : 1; //saco la cantidad pedida o sino doy un 1. 
    const dispatch = useDispatch();

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, quantity));
        }
    }, []);

    return (
        <div>Cart Page</div>
    )
};

export default CartPage;