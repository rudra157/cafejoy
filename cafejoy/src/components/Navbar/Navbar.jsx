import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <div className="container menus">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className={isOpen ? 'nav open' : 'nav'}>
          <ul>
            <li>
              <Link to="/cafejoy" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/FoodPage" onClick={toggleMenu}>Menu</Link>
            </li>
            <li>
              <Link to="/Menu" onClick={toggleMenu}>Online store</Link>
            </li>
            <li>
              <Link to="/Contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
