import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';


function CartPage(props){

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const productId = props.match.params.id;
    const quantity = props.location.search ? Number(props.location.search.split("=")[1]) : 1; //saco la cantidad pedida o sino doy un 1. 
    const dispatch = useDispatch();
    const removeFromCartHandler = (productId)=>{
        dispatch(removeFromCart(productId))
    }

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, quantity));
        }
    }, []);

    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>
                            Product to pay:
                        </div>
                    </li>
                    <li>
                        {
                            cartItems.length === 0 ? <div>Cart is empty</div> : 
                            cartItems.map( item => 
                            <div>
                                <div className="cart-image">
                                    <img src={item.image} alt="product"></img>
                                </div>
                                
                                <div className="cart-name">
                                    <div>
                                        <Link to={'/products/'+item.product}>{item.name}</Link>
                                        
                                    </div>
                                    <div>
                                        Quantity:
                                        <select value={item.quantity} onChange={(e)=> dispatch(addToCart(item.product, e.target.value))}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                        </select>
                                        <button type="button" className="button" onClick={()=> removeFromCartHandler(item.product)}>Delete</button>
                                    </div>
                                </div>
                                <div className="cart-price"> 
                                    Price per item: {item.price} €
                                </div>
                            </div>)
                        }
                    </li>

                </ul>
            </div>
            {/* a= accumulator  c= currentValue */} 
            <div className="cart-action">
                <h3> 
                    Subtotal ({ cartItems.reduce((a, c)=> a + c.quantity, 0)} items)
                    : {cartItems.reduce((a, c)=> a + c.quantity * c.price, 0) } € 
                </h3>
                <button className= "button primary" disabled={cartItems.length === 0}>Procced to Checkout</button>
                
            </div>
        </div>
    )
};

export default CartPage;