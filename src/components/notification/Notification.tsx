import React, { useEffect, useState } from 'react'
import { NotificationInterface } from '../../redux/actionTypes/notificationTypes'
import { getProperDate } from '../../utils/getProperDate'

type NotificationProps = {
    noti: NotificationInterface
}
export const Notification: React.FC<NotificationProps> = ({ noti }) => {
    const [notiText, setNotiText] = useState<string | null>(null)




    useEffect(() => {
        switch (noti.notification_type) {
            case "C":
                setNotiText(`${noti.from_user.username} commented your post!`)
                break;
            case "L":
                setNotiText(`${noti.from_user.username} liked your post!`)
                break;
            case "CL":
                setNotiText(`${noti.from_user.username} liked your comment!`)
                break;
            case "CR":
                setNotiText(`${noti.from_user.username} answered  your comment!`)
                break;
            case "F":
                setNotiText(`${noti.from_user.username} followed  you!`)
                break;
            default:
                setNotiText("Error")
        }
    }, [noti])

    return (
        <div>
            {getProperDate(noti)} <br />
            {notiText}
        </div>
    )
}
