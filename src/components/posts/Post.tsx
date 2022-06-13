import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { changeLikeStatus, deletePost } from '../../redux/actionCreators/postActions'
import { PostInterface } from '../../redux/actionTypes/PostTypes'

type PostProps = {
    postData: PostInterface,
    key: number,
}

export const Post: React.FC<PostProps> = ({ postData }) => {
    const dispatch = useDispatch()

    const getProperDate = () => {
        let date = new Date(postData.created).getTime() / 1000
        let now = new Date().getTime() / 1000
        let time = (now - date) / 60
        if (time > 60 * 24) {
            //older than a day
            if (time < 60 * 24 * 7) {
                return `${Math.floor(time / (60 * 24))} days ago`
            } else {
                return `More than a week ago`
            }
        } else {
            if (time > 60) {
                return `${Math.floor(time / 60)} hours ago`

            } else if (time < 1) {
                return `Now`
            }
            else {
                return `${Math.floor(time)} minutes ago`
            }
        }

    }

    const deletePostClick = () => {
        dispatch(deletePost(postData.id) as any)
    }

    const likeOrDislike = () => {
        dispatch(changeLikeStatus(postData.id) as any)
    }

    return (
        <div className='post'>
            <div className='post_author'>
                <Link className='profile_link'
                    to={"/profile/" + postData.author.username}>
                    <img className="post_author_image"
                        src={postData.author.avatar} />
                    <div className="post_author_username">
                        {postData.author.username}</div>
                </Link>
                <div className="post_date">
                    {getProperDate()}</div>
            </div>

            <div className='post_title'>{postData.title} </div>

            <div className='post_body'>{postData.body}</div>
            <div className='post_like'>
                {postData.is_liked_by_me ?
                    <HiHeart onClick={likeOrDislike} /> :
                    <HiOutlineHeart onClick={likeOrDislike} />
                }
                {postData.likes}
            </div>
            {postData.am_i_author &&
                <button onClick={deletePostClick}>Delete</button>}
        </div>
    )
}
