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
                "username": username, "password": password
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