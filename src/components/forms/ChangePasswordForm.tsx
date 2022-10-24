import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/actionCreators/authActions';
import { ActionType } from '../../redux/actionTypes/authTypes';

export const ChangePasswordForm = () => {
    const [oldPassword, changeOldPassword] = useState("");
    const [newPassword1, changeNewPassword1] = useState("");
    const [newPassword2, changeNewPassword2] = useState("");
    const dispatch = useDispatch()

    const changePasswordOnclick = () => {
        if (newPassword1 != newPassword2) {

            dispatch({
                type: ActionType.ERROR,
                payload: "Repeat the same new password two times!"
            })

        } else {
            if (newPassword1.length >= 6) {
                dispatch(changePassword(oldPassword, newPassword2) as any)
            } else {
                dispatch({
                    type: ActionType.ERROR,
                    payload: "Password must be longer than 5 characters!"
                })
            }
        }
        changeOldPassword("")
        changeNewPassword1("")
        changeNewPassword2("")
    }


    return (
        <>
            <h2>Change password</h2>
            <input type="password" className="input-text input-text-settings"
                placeholder='Old Password'
                value={oldPassword}
                onChange={(e) => changeOldPassword(e.target.value)} />

            <input type="password" className="input-text input-text-settings"
                placeholder='New Password'
                value={newPassword1}
                onChange={(e) => changeNewPassword1(e.target.value)} />

            <input type="password" className="input-text input-text-settings"
                placeholder='Repeat new Password'
                value={newPassword2}
                onChange={(e) => changeNewPassword2(e.target.value)} />

            <button className='main_button settings-button 
            change-password-btn'
                onClick={changePasswordOnclick}
            >Change password</button>
        </>
    )
}
