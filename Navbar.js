import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () =>  setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="navbar">
         <div className="hamburger-menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
              
         </div>
          
         
          <ul className= { isMenuOpen ? 'navbar-links active': 'navbar-links'}>
                  <li><a href="#whyus">Why Us?</a></li>
                  <li><a href="#services">Services</a></li>
                </ul>
                <div className='logo'>
                    <a href='#'><img src='https://www.propertypistol.com/images/pp-logo.svg' alt='' /></a>
                </div>
                <ul className={ isMenuOpen ? 'navbar-links active': 'navbar-links'}>
                  <li><a href="#Homeloan">Home Loan</a></li>
                  <li><a href="#Postproperty">Post Property</a></li>
                  <li><a href="#Saved">Saved</a></li>
                  <li><a href="#Signin">Signin</a></li>
                </ul>
              
                   
               
     
    </nav>
  );
}

export default Navbar