import {useState } from 'react';
import '../styles/navbar.css';
//The code should be modular with ES6 import/export syntax. Make separate file for each component and import them in App.js. Make sure the resultant code is responsive, use bootstrap or SCSS for responsiveness.
const navbar = () => {


    return (
        <div className='navbar'>
            <nav>
                <img src='/images/logo.png' alt='logo' />
                <ul>
                    <li>Home</li>
                    <li>Our Products</li>
                    <li>Doctor's Profile</li>
                </ul>
                <div class='user'>
                    <h3>Simon</h3>
                    <img src='/images/user.png' alt='user' />
                </div>
                </nav>
        </div>
    )
}

export default navbar;