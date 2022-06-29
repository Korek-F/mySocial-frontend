import React from 'react'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { Notification } from '../components/notification/Notification'

export const Notifications = () => {
    const { notifications } = useTypedSelector(state => state.noti)
    console.log(notifications)
    return (
        <div>
            Notifications
            {notifications?.map(n => <Notification noti={n} />)}
        </div>
    )
}
