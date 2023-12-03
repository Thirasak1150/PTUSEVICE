import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Nav.css'
function Nav() {
  return (
    <>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Sevice">Service</Link>
        <Link to="/Login">Logout</Link>
    </nav>
    </>

  )
}

export default Nav