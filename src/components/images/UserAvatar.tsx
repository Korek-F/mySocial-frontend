import React from 'react'
import { UserLessInfoInterface } from '../../redux/actionTypes/PostTypes'
import { ProfileInterface } from '../../redux/actionTypes/userTypes'
import default_prof from '../../img/default_prof.png'

type UserAvatarProps = {
    avatar_user: UserLessInfoInterface | ProfileInterface,
    css_class?: null | string;
}



export const UserAvatar: React.FC<UserAvatarProps> = ({ avatar_user, css_class }) => {
    return (
        <img className={css_class ? css_class : "post_author_image"}
            src={avatar_user.avatar ? `${avatar_user.avatar}` : default_prof}
            alt="" />
    )
}
