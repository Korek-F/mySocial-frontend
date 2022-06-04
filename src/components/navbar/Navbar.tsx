import React from 'react'
import { Link } from 'react-router-dom'

import "./../../css/main.css"

export const Navbar = () => {

    return (
        <div className='main-navbar'>
            <Link className='navbar-link' to="/" >Main</Link>
            <Link className='navbar-link' to="/signin" >Login</Link>
            <Link className='navbar-link' to="/signup" >Registration</Link>
        </div>
    )
}
