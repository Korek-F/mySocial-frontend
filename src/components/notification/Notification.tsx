import React from 'react'
import { NotificationInterface } from '../../redux/actionTypes/notificationTypes'

type NotificationProps = {
    noti: NotificationInterface
}
export const Notification: React.FC<NotificationProps> = ({ noti }) => {
    return (
        <div>{noti.notification_type}</div>
    )
}
