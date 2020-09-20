import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductPage(props) {
    //console.log(props.match.params.id);
    const [quantity, setQuantity] = useState(1); //Inicial cart quantity 
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
            //none
        };
    }, []);


    //handling cart:
    const handleAddCart = () => {
        props.history.push('/cart/'+props.match.params.id+'?quantity='+quantity);
    }


    return (
        <div>
            <Link to="/" className="backtothemainpage">Back to the Main-Page</Link>
            
            {loading ? <div>Loading...</div> : error ? <div>{error}</div> : (
                <div className="details">
                        
                    <div className="details-image">
                        <img src={product.image} alt="details" ></img>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h3>{product.product}</h3>
                            </li>
                            <li>
                                <p>Category: <b><i>{product.category}</i></b></p>
                            </li>
                            <li>
                                <p>Details: {product.description}</p>
                            </li>
                            
                            
                        </ul>
                    </div>
                    <div className="details-order">
                        <ul>
                            <li>
                                <p>Price: {product.price} €</p>
                            </li>
                            <li>
                                Quantity:<select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </li>
                            <li>
                                <button onClick={handleAddCart}>Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                
                </div>
            )}
       
        </div>
        );
}

export default ProductPage;