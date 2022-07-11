import React, { useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { Notification } from '../components/notification/Notification'
import { getNotifications } from '../redux/actionCreators/notiActions'
import { useDispatch } from 'react-redux'

export const Notifications = () => {
    const { notifications } = useTypedSelector(state => state.noti)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNotifications() as any)
    }, [])

    return (
        <div>
            Notifications
            {notifications?.map(n => <Notification key={n.id} noti={n} />)}
        </div>
    )
}
