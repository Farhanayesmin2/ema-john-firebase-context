import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    
    const products = useLoaderData();

    useEffect(( )=> {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                savedCart.push(addedProduct);
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
               
            }
            setItems(savedCart);
        }
    },[products])

    const [items, setItems] = useState([]);

    const clearCart = () => {
        setItems([]);
        deleteShoppingCart();
    }

    const handleAddToCart = (selectedProduct) => {
        let newItems = [];
        const exists = items.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newItems = [...items, selectedProduct];
        }
        else {
            const rest = items.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newItems = [...rest, exists];
        }
        setItems(newItems);
        addToDb(selectedProduct.id);

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product.id}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
               <Cart items={items} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;