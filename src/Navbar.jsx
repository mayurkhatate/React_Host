import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="About/">About</NavLink></li>
        <li><NavLink to="Contact/">Contact</NavLink></li>
        <li><NavLink to="Post">Post</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
