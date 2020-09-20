import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductPage(props) {
    //console.log(props.match.params.id);
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return ()=>{
            //none
        };
    }, [])

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
                                <h3>{product.name}</h3>
                            </li>
                            <li>
                                <p>Category: {product.category}</p>
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
                                Select:<select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </li>
                            <li>
                                <button>Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                
                </div>
            )}
       
        </div>
        );
}

export default ProductPage;