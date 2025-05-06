import React from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <div className="container">
        <div className="menus">
          <div className="logo">
            <img src={logo} alt=''/>
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/FoodPage'>FoodPage</Link>
              </li>
              <li>
                <Link to='/Menu'>Items</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
