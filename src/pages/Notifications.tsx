import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { Notification } from '../components/notification/Notification'
import { getNotifications, seenNotifications } from '../redux/actionCreators/notiActions'
import { useDispatch } from 'react-redux'
import { ActionType } from '../redux/actionTypes/notificationTypes'

export const Notifications = () => {
    const { notifications } = useTypedSelector(state => state.noti)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotifications() as any)
        dispatch(seenNotifications() as any)
        dispatch({ type: ActionType.UNSEEN_NOTIFICATIONS_COUNT, payload: 0 })
    }, [])

    return (
        <div className='noti_page'>
            <h1> Notifications</h1>
            {notifications?.length! > 0 ? <>
                {notifications?.map(n => <Notification key={n.id} noti={n} />)}
            </>
                :
                <h3>You don't have any notifications yet.</h3>}

        </div>
    )
}
