import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { ActionType } from '../redux/actionTypes/authTypes';

type ErrorProps = {
    error: string;
}

export const ErrorMessage: React.FC<ErrorProps> = ({ error }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: ActionType.DELETE_ERRORS })
        }, 3000)
    }, [])

    return (
        <div className='error_message'>{error}</div>
    )
}
