import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypeSelector'
import { logout } from '../../redux/actionCreators/authActions'

import "./../../css/main.css"

export const Navbar = () => {
    const { access } = useTypedSelector(state => state.auth)
    const { user } = useTypedSelector(state => state.user)
    const { unseen_notifications_count } = useTypedSelector(state => state.noti)
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)

    const logoutOnClick = () => {
        dispatch(logout() as any)
    }


    return (
        <div className={active ? "main-navbar main-navbar-active" : "main-navbar"} >

            <div
                className={active ? "navbar_hamburger navbar_hamburger-active" : "navbar_hamburger"}
                onClick={() => setActive(!active)}>
                |||
            </div>
            <Link className={active ? "navbar-link navbar-link-active special-link" : "navbar-link special-link"} to="/" >T&gt;\PE</Link>
            {(access && user) ?

                <>
                    <Link
                        className={active ? "navbar-link navbar-link-active" : "navbar-link"}
                        to={"/profile/" + user.username}
                    >My Profile</Link>

                    <Link
                        className={active ? "navbar-link navbar-link-active" : "navbar-link"} to={"/notifications/"}>
                        Notifications
                        {(unseen_notifications_count > 0) &&
                            <span className='noti_count'>( {unseen_notifications_count} )</span>}
                    </Link>

                    <Link
                        className={active ? "navbar-link navbar-link-active" : "navbar-link"} to={"/settings/"}>
                        Settings
                    </Link>



                    <Link className={active ? "navbar-link navbar-link-active" : "navbar-link logout-link"}
                        to="/"
                        onClick={logoutOnClick}
                    >Logout</Link>
                </>
                :
                <>
                    <Link className={active ? "navbar-link navbar-link-active" : "navbar-link"} to="/signin" >Login</Link>
                    <Link className={active ? "navbar-link navbar-link-active" : "navbar-link"} to="/signup" >Registration</Link>
                </>
            }
        </div >
    )
}
