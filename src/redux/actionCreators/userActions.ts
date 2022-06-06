import { Dispatch } from "react"
import { BASE_URL } from "../../constants/addresses"
import { Action, ActionType } from "../actionTypes/userTypes"
import { Action as Action2, ActionType as ActionType2 } from "../actionTypes/authTypes"
import axios from 'axios';

export const getUserProfile = (id: number) => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.get(`${BASE_URL}/auth/get-user/${id}`)
            console.log(res.data)
            dispatch({
                type: ActionType.GET_USER_PROFILE_SUCCESS,
                payload: res.data
            })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            console.log(e)
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
    }
}