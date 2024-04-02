import {useState } from 'react';
import './Navbar.css';

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