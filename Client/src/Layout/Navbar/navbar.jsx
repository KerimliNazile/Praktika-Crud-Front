
import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
const Navbar = () => {
  return (
    <nav>
      <ul className='MainNavbar'>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
        {/* <li><NavLink to={"/detail"}>Detail</NavLink></li> */}
      </ul>
    </nav>
  )
}

export default Navbar
