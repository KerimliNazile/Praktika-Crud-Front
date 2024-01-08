
import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
const Navbar = () => {
  return (
    <nav>
      <ul className='MainNavbar'>
        <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
