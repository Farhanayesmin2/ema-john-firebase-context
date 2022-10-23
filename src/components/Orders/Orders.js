import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';    
import './Order.css';
const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    const removeEventHandler =(id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
}


    return (
        <div>  
           <div className='shop-container'>
                <div className="orders-container">
                    {
                        cart.map(product => <ReviewItems key={product.id}
                            product={product}
                            removeEventHandler={removeEventHandler}
                        ></ReviewItems>)
                    }
                    {
                        cart.length === 0 && <h2>No Items Found in Order Summary. <Link to='/shop'>Please Shop!!!</Link>  </h2>
                    }
                </div>
           
            <div className='cart-container'>
                    <Cart items={cart} clearCart={clearCart}  >
                        <Link to='/shipping'>
                            <button className='order-button'>Proceed Shipping</button>
                        </Link>

                 </Cart>
            </div>
            </div>
            </div>
    );
};

export default Orders;