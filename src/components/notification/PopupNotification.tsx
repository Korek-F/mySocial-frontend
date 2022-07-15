import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ActionType } from '../../redux/actionTypes/notificationTypes';

type Props = {
    notification: string;
}

export const PopupNotification: React.FC<Props> = ({ notification }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: ActionType.DELETE_CURRENT_NOTIFICATION })
        }, 3000)
    }, [])
    return (
        <Link to={"/notifications/"}>
            <div className='popup_notification'>
                <p> {notification}</p>
                <small>Click to see more!</small>
            </div>
        </Link>
    )
}
