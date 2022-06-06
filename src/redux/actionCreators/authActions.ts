import { Dispatch } from 'redux';
import { Action, ActionType } from '../actionTypes/authTypes';
import axios from 'axios';
import { BASE_URL } from '../../constants/addresses';

export const login = (username: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })

        try {
            const res = await axios.post(`${BASE_URL}/auth/token/`, {
                "username": username, "password": password
            })
            dispatch({
                type: ActionType.LOGIN_SUCCESS,
                payload: res.data.access
            })
            dispatch({
                type: ActionType.MESSAGE,
                payload: "Login successed!"
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
            localStorage.setItem("access", res.data.access)
            localStorage.setItem("refresh", res.data.refresh)
        }
        catch (e) {
            console.log(e)
            dispatch({
                type: ActionType.ERROR,
                payload: "Cannot login!"
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
    }
}

export const verify = (token: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })
        try {
            await axios.post(`${BASE_URL}/auth/email-verify/`, {
                "token": token
            })
            dispatch({
                type: ActionType.VERIFY_SUCCESS,
                payload: "Verification successed, you can login now!"
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })

        }
        catch (e) {
            console.log("E", e)
            dispatch({
                type: ActionType.ERROR,
                payload: "Invalid Token or something went wrong!"
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
    }
}

export const logout = () => (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOGOUT })
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
}