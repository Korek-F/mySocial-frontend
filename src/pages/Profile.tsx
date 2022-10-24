import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Post } from '../components/posts/Post'
import { EditModal } from '../components/profile/EditModal'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { getUserPosts } from '../redux/actionCreators/postActions'
import { followAction, getOtherUserProfile } from '../redux/actionCreators/userActions'
import { AiFillEdit } from "react-icons/ai"
import { UserAvatar } from '../components/images/UserAvatar'
import { UserCover } from '../components/images/UserCover'


export const Profile = () => {
    const dispatch = useDispatch()
    const { current_user, user } = useTypedSelector(state => state.user)
    const { profile_posts } = useTypedSelector(state => state.posts)
    const { access } = useTypedSelector(state => state.auth)
    const { username } = useParams();
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        if (username) {
            dispatch(getOtherUserProfile(username) as any)
            dispatch(getUserPosts(username) as any)
        }
    }, [username, edit, dispatch])

    const followOnClick = () => {
        dispatch(followAction(username || "TEST") as any)

    }
    return (
        <div className='user_profile_page'>


            <div className='profile_upper'>


                {current_user &&
                    <>
                        <UserCover cover_user={current_user} css_class="profile_cover" />

                        <UserAvatar avatar_user={current_user} css_class="profile_avatar" />
                    </>
                }
            </div>
            <div className='profile_lower'>
                <div className='profile_username'>
                    {current_user?.name ?
                        <>{current_user?.name} ({current_user?.username})</> :
                        <> {current_user?.username}</>
                    }

                </div>

                <div className="follow_panel">
                    <div className='profile_followers'>
                        Followers: {current_user?.followers} </div>
                    <div className='profile_followers'>
                        Following: {current_user?.following} </div>

                    {current_user?.username === user?.username && <>
                        <AiFillEdit className="my-icon edit-profile"
                            onClick={() => setEdit(!edit)} />
                    </>}

                    {(access && current_user?.username !== user?.username) &&
                        <>
                            {current_user?.is_followed_by_me ?
                                <button onClick={followOnClick} className="main_button">
                                    Unfollow
                                </button>
                                :
                                <button onClick={followOnClick}
                                    className="main_button">
                                    Follow
                                </button>}
                        </>

                    }
                </div>
            </div>

            {edit && <EditModal setEdit={setEdit} />}

            <>
                <h1>Posts:</h1>
                {
                    profile_posts?.map(e =>
                        <Post key={e.id} postData={e} />
                    )
                }
            </>



        </div >
    )
}
