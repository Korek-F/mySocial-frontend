import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { Post } from '../components/posts/Post'
import { BASE_URL } from '../constants/addresses'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { getUserPosts } from '../redux/actionCreators/postActions'
import { getOtherUserProfile } from '../redux/actionCreators/userActions'

export const Profile = () => {
    const dispatch = useDispatch()
    const { current_user } = useTypedSelector(state => state.user)
    const { profile_posts } = useTypedSelector(state => state.posts)
    const { username } = useParams();

    useEffect(() => {
        if (username) {
            dispatch(getOtherUserProfile(username) as any)
            dispatch(getUserPosts(username) as any)
        }

    }, [])


    return (
        <div className='user_profile_page'>
            <div className='profile_upper'>
                <img className="profile_cover" src={current_user?.cover!} />
                <img className="profile_avatar" src={current_user?.avatar!} />
            </div>
            <div className='profile_lower'>
                <div className='profile_username'>{current_user?.username} </div>

                <div className="follow_panel">
                    <div className='profile_followers'>
                        Followers: {current_user?.followers} </div>
                    <div className='profile_followers'>
                        Following: {current_user?.following} </div>

                    <button>
                        Follow
                    </button>
                </div>
            </div>

            <div>
                <h1>Posts:</h1>
                {
                    profile_posts?.map(e =>
                        <Post key={e.id} postData={e} />
                    )
                }
            </div>



        </div>
    )
}
