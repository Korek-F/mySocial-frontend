import { getErrors } from "../../utils/getErrors";
import { Dispatch } from "react"
import { BASE_URL } from "../../constants/addresses"
import axios from 'axios';
import authHeader from "../../utils/authHeaders";
import { Action as Action2, ActionType as ActionType2 } from "../actionTypes/authTypes"
import { Action, ActionType } from "../actionTypes/notificationTypes";

export const getNotifications = () => {
    return async (dispatch: Dispatch<Action | Action2>) => {
        dispatch({ type: ActionType2.LOADING })
        try {
            const res = await axios.get(`${BASE_URL}/blog/notifications`,
                { "headers": authHeader() })
            console.log(res.data)
            dispatch({ type: ActionType.GET_NOTIFICATIONS, payload: res.data })
            dispatch({ type: ActionType2.STOP_LOADING, })
        }
        catch (e) {
            dispatch({ type: ActionType2.STOP_LOADING, })
            dispatch({
                type: ActionType2.ERROR,
                payload: getErrors(e)
            })
        }
    }
}