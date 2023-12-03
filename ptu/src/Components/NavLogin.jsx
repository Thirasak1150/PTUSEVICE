import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Nav.css'
function NavLogin() {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Sevice">Service</Link>
            
        </nav>
        </>
    
      )
}

export default NavLogin