import React from 'react';
import { Link } from 'react-router-dom';
import "./Cart.css";
const Cart = ({items,clearCart}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of items) {
        total = total + product.price*product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
        
    }
    const tax = total * 0.1;

    const grandTotal = total + shipping + tax;
    return (
        <div className='cart-items'>
             <h2 className='order-summary'>Order Summary </h2> 
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping
} </p>
            <p>Tax: {tax.toFixed(2)} </p>
            <h3>Grand Total: ${grandTotal} </h3>
            <div >
            <button onClick={clearCart} className='order-button' >Clear Cart</button>
            </div>
           <div><Link to='/order' > <button className='order-button'>Review Order</button>  </Link></div>
            
            
        </div>
    );
};

export default Cart;