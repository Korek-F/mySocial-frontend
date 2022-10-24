import { Dispatch } from 'redux';
import { Action, ActionType } from '../actionTypes/authTypes';
import { Action as Action2, ActionType as ActionType2 } from '../actionTypes/userTypes';
import axios from 'axios';
import { BASE_URL } from '../../constants/addresses';
import { getErrors } from '../../utils/getErrors';
import authHeader from '../../utils/authHeaders';

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
            dispatch({
                type: ActionType.ERROR,
                payload: getErrors(e)
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
    }
}


export const register = (email: string, username: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })
        try {
            await axios.post(`${BASE_URL}/auth/registration/`, {
                "email": email, "username": username, "password": password
            })
            dispatch({
                type: ActionType.MESSAGE,
                payload: "Registartion successed! Check your email now."
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
        catch (e) {
            dispatch({
                type: ActionType.ERROR,
                payload: getErrors(e)
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
                type: ActionType.MESSAGE,
                payload: "Verification successed!"
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })

        }
        catch (e) {
            console.log("E", e)
            dispatch({
                type: ActionType.ERROR,
                payload: getErrors(e)
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
    }
}

export const deleteAccount = () => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })
        try {
            console.info(authHeader())
            await axios.patch(`${BASE_URL}/auth/delete-user/`, {}, {
                "headers": authHeader()
            })
            dispatch({ type: ActionType.LOGOUT })
            dispatch({
                type: ActionType.MESSAGE,
                payload: "Removal successed!"
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
        catch (e) {
            console.log("E", e)
            dispatch({
                type: ActionType.ERROR,
                payload: getErrors(e)
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
    }
}

export const changePassword = (old_password: string, new_password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOADING
        })

        try {
            const res = await axios.patch(`${BASE_URL}/auth/change-password/`, {
                "old_password": old_password, "new_password": new_password
            }, {
                "headers": authHeader()
            })

            dispatch({
                type: ActionType.MESSAGE,
                payload: res.data
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
        catch (e) {
            console.log("E", e)
            dispatch({
                type: ActionType.ERROR,
                payload: getErrors(e)
            })
            dispatch({
                type: ActionType.STOP_LOADING
            })
        }
    }
}



export const logout = () => (dispatch: Dispatch<Action | Action2>) => {
    dispatch({ type: ActionType.LOGOUT })
    dispatch({ type: ActionType2.GET_USER_PROFILE_SUCCESS, payload: null })
    dispatch({
        type: ActionType.MESSAGE,
        payload: "Logout successed!"
    })
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
}