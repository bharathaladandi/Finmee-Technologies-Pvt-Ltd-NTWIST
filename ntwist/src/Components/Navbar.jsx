import React, { useState } from 'react';
import '../Styles/Navbar.css';


export const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!MenuOpen);
    };
  return (
    <nav className="navbar">
        <div className="left">
        <img className='logo' src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
      </div>
        <div className={`right ${MenuOpen ? 'open' : ''}`}>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="innerlinks">
            <li><a href="#">Home</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">AI Software</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        </div>
    </nav>
  )
}
