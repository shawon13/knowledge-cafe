import React from 'react';
import './Header.css';
import logo from '../../images/profile.png';
const Header = () => {
    return (
        <nav>
            <div className='header-container'>
                <h2>Knowledge Cafe</h2>
                <img src={logo} alt="" />
            </div>
            <hr className='hr' />
        </nav>
    );
};

export default Header;