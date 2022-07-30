import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/addresses'
import { NotificationInterface } from '../../redux/actionTypes/notificationTypes'
import { getProperDate } from '../../utils/getProperDate'

type NotificationProps = {
    noti: NotificationInterface
}
export const Notification: React.FC<NotificationProps> = ({ noti }) => {
    const [notiText, setNotiText] = useState<string | null>(null)
    const [notiLink, setNotiLink] = useState<string | null>(null)



    useEffect(() => {
        switch (noti.notification_type) {
            case "C":
                setNotiLink(`/post/${noti.post}`)
                setNotiText(`${noti.from_user.username} commented your post!`)
                break;
            case "L":
                setNotiLink(`/post/${noti.post}`)
                setNotiText(`${noti.from_user.username} liked your post!`)
                break;
            case "CL":
                setNotiLink(`/post/${noti.post}`)
                setNotiText(`${noti.from_user.username} liked your comment!`)
                break;
            case "CR":
                setNotiLink(`/post/${noti.post}`)
                setNotiText(`${noti.from_user.username} answered  your comment!`)
                break;
            case "F":
                setNotiLink(`/profile/${noti.from_user.username}`)
                setNotiText(`${noti.from_user.username} followed  you!`)
                break;
            default:
                setNotiText("Error")
        }
    }, [noti])

    return (
        <Link to={`${notiLink}`} className="noti_link">
            <div className={noti.has_been_seen ? "noti" : "noti new_noti"}>
                <img className="post_author_image"
                    src={BASE_URL + noti.from_user.avatar} />

                <div className='noti_content'>
                    <div className='noti_time'> {getProperDate(noti)}  </div>
                    <div className='noti_text'> {notiText} </div>
                </div>
            </div>
        </Link>
    )
}
