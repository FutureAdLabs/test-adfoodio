import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductPage(props) {
    //console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return (
        <div>
            <Link to="/" className="backtothemainpage">Back to the Main-Page</Link>
            <div className="details">
                
                <div className="details-image">
                    <img src={product.image} alt="image" ></img>
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
            
        </div>
        );
}

export default ProductPage;