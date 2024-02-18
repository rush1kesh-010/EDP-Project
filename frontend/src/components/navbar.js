import {useState } from 'react';
import '../styles/navbar.css';
import '../global.css';
//The code should be modular with ES6 import/export syntax. Make separate file for each component and import them in App.js. Make sure the resultant code is responsive, use bootstrap or SCSS for responsiveness.



const navbar = () => {


    return (
        <header className="navbar">
        <div className="edp-wrapper">
          <b className="edp">EDP</b>
        </div>
        <div className="home-page-frame">
          <div className="box">{`Home `}</div>
          <div className="box">Notes</div>
          <div className="box">Doctors web</div>
          <div className="box">Log in</div>
        </div>
        <div className="text-label">
          <div className="nurse-detail"><b>Darrell Steward</b></div>
          <img
            className="main-menu-bar"
            loading="eager"
            alt=""
            src="../assets/Ellipse 10.png"
          />
        </div>
      </header>
    )
}


export default navbar;