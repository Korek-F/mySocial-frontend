import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ActionType } from '../redux/actionTypes/authTypes';

type MessageProps = {
    message: string;
}

export const SuccessMessage: React.FC<MessageProps> = ({ message }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: ActionType.DELETE_MESSAGES })
        }, 3000)
    }, [])


    return (
        <div>{message}</div>
    )
}
