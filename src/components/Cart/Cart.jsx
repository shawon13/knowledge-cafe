import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div>
            <div className='cart-time'>
                <h6>Spent time on read : 500 min</h6>
            </div>
            <div className='cart-details'>
                <h4>Bookmarked Blogs : 8</h4>
                <div className='cart-blog-name'>
                    <h6>How to get your first job as a self-taught programmer</h6>
                </div>
            </div>
        </div>
    );
};

export default Cart;