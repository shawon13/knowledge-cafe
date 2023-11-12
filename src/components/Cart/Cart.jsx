import React from 'react';
import './Cart.css'
import Blogname from '../Blogname/Blogname';
const Cart = ({ cart, carts }) => {
    let totalTime = 0;
    for (const time of carts) {
        totalTime = totalTime + time.read_time * time.quantity;
    }
    return (
        <div className='cart'>
            <div className='cart-time'>
                <h6>Spent time on read : {totalTime} min</h6>
            </div>
            <div className='cart-details'>
                <h4>Bookmarked Blogs : {cart.length}</h4>
                {
                    cart.map(b => <Blogname key={b.id} b={b}></Blogname>)
                }
            </div>
        </div>
    );
};

export default Cart;