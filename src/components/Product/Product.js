import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css"
const Product = (props) => {
    const { product, handleAddToCart } = props;
    const { name, img, price, ratings, seller } =product;
 
    return (
        <div className='product'>
            <img src={img} alt="/" ></img>
            <div className='product-info'>
                <p className='product-name'> {name}</p>
            <p>Price: {price}</p>
            <p><small>Seller: {seller}</small></p>
                <p><small>Rating:{ratings} <span className='star-color'>★★★★☆</span></small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'><p>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </p></button>
            
        </div>
        
    );
};

export default Product;