import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { ChangePasswordForm } from '../components/forms/ChangePasswordForm'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { deleteAccount } from '../redux/actionCreators/authActions'


export const Settings = () => {
    const { access } = useTypedSelector(state => state.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteAccountOnClick = () => {
        console.log("SA")
        dispatch(deleteAccount() as any)
        navigate("/")
    }

    useEffect(() => {
        if (!access) {
            navigate("/")
        }
    }, [])

    return (
        <div className='settings_page'>
            <h1>Settings</h1>
            <p>There are your account settings.</p>
            <br />

            <div className='settings_option'>
                <ChangePasswordForm />
            </div>

            <div className='settings_option'>
                <h2>Delete Account</h2>
                <p>Once deleted, the account cannot be recovered.</p>
                <button className='main_button settings-button account-delete-button'
                    onClick={deleteAccountOnClick}
                >
                    Delete account
                </button>
            </div>
        </div>
    )
}
