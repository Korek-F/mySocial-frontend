import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { logout } from '../../redux/actionCreators/authActions'

import "./../../css/main.css"

export const Navbar = () => {
    const { access } = useTypedSelector(state => state.auth)
    const { user } = useTypedSelector(state => state.user)
    const dispatch = useDispatch()


    const logoutOnClick = () => {
        dispatch(logout() as any)
    }
    return (
        <div className='main-navbar'>
            <Link className='navbar-link' to="/" >Main</Link>
            {access ?
                <>
                    <Link className='navbar-link'
                        to="/"
                        onClick={logoutOnClick}
                    >Logout</Link>

                    {user &&
                        <Link
                            className='navbar-link' to={"/profile/" + user.username}
                        >My Profile</Link>
                    }
                </>
                :
                <>
                    <Link className='navbar-link' to="/signin" >Login</Link>
                    <Link className='navbar-link' to="/signup" >Registration</Link>
                </>
            }
        </div >
    )
}
