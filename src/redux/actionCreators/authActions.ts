import { Dispatch } from 'redux';
import { Action, ActionType } from '../actionTypes/authTypes';
import axios from 'axios';
import { BASE_URL } from '../../constants/addresses';

export const login = (username: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN
        })

        try {
            const res = await axios.post(`${BASE_URL}/auth/token/`, {
                "username": username, "passwrd": password
            })
            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                payload: res.data.access
            })
            localStorage.setItem("access", res.data.access)
            localStorage.setItem("refresh", res.data.refresh)
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const verify = (token: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.VERIFY
        })
        try {
            const res = await axios.post(`${BASE_URL}/auth/email-verify/`, {
                "token": token
            })
            dispatch({
                type: ActionType.VERIFY_SUCCESS,
                payload: "Verification successed, you can login now!"
            })

        }
        catch (e) {
            console.log("E", e)
        }
    }
}