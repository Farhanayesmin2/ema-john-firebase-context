import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'
const ReviewItems = ({ product, removeEventHandler }) => {
    const { name, price, quantity,id, stock,img } = product;
    console.log(product);
    return (
        <div >
            <div className='review-items'>
                <div>
                <img src={img} alt="/"></img>
                </div>
                <div className='order-info'>
                    <div className='review-details'>
                    <h2 className='title'>{name} </h2> 
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                    </div>
                    <div>
                    <button onClick={() => removeEventHandler(id) } className='delete-button' > <FontAwesomeIcon className='btn-icon' icon={faTrashAlt} ></FontAwesomeIcon>   </button>
                </div>
                </div>
                
               
                
            
            </div>
            
        </div>
    );
};

export default ReviewItems;