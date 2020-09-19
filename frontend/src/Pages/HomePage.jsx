import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomePage(props) {

    const [products, setProduct] = useState([]);

    useEffect(()=>{
      const fecthData = async ()=>{
        const {data} = await axios.get("/api/products"); 
        setProduct(data);
      }
    fecthData(); 
    return ()=>{

      };
    }, [])
  

    return (   
        <ul className="products">{products.map(product =>
            <li key={product._id}>
            <div className="product">
              <Link to={'/product/'+product._id}>
                <img className="product-image" src={product.image} alt="product" />
              </Link>
              <div className="product-category">{product.category}</div>
              <div className="product-name">
                <Link to={'/product'+product._id}>{product.name}</Link>
              </div>
              <div className="product-price">
                {product.price} €
              </div>
            </div>
          </li>
            )
        }                         
      </ul>
    );
}

export default HomePage;
