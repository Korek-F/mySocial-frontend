import React from 'react'
import { UserLessInfoInterface } from '../../redux/actionTypes/PostTypes'
import { ProfileInterface } from '../../redux/actionTypes/userTypes'
import default_cover from '../../img/default_cover.jpg'

type UserCoverProps = {
    cover_user: ProfileInterface,
    css_class?: null | string;
}


export const UserCover: React.FC<UserCoverProps> = ({ cover_user, css_class }) => {

    return (
        <img className={css_class ? css_class : "profile_cover"}
            src={cover_user.cover ? `${cover_user.cover}` : default_cover}
            alt="" />
    )
}
