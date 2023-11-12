import React from 'react';
import './Blogname.css'
const Blogname = ({ b }) => {
    return (
        <div className='cart-blog-name'>
            <h6>{b.name}</h6>
        </div>
    );
};

export default Blogname;