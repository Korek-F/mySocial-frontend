import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { changeLikeStatus, deletePost } from '../../redux/actionCreators/postActions'
import { PostInterface } from '../../redux/actionTypes/PostTypes'
import { Comment } from './Comment';
import { getProperDate } from '../../utils/getProperDate';

type PostProps = {
    postData: PostInterface,
    key: number,
}

export const Post: React.FC<PostProps> = ({ postData }) => {
    const dispatch = useDispatch()



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
                        {postData.author.name ?
                            <>{postData.author.name} ({postData.author.username})</> :
                            <> {postData.author.username}</>
                        }
                    </div>
                </Link>
                <div className="post_date">
                    {getProperDate(postData)}</div>
            </div>

            <div className='post_title'>{postData.title} </div>

            <div className='post_body'>{postData.body}</div>
            <div className='post_like'>
                {postData.is_liked_by_me ?
                    <HiHeart className="like-icon" onClick={likeOrDislike} /> :
                    <HiOutlineHeart className="like-icon" onClick={likeOrDislike} />
                }
                {postData.likes > 0 &&
                    <span className='like-count'>{postData.likes}</span>
                }
            </div>
            {postData.am_i_author &&
                <button className="main_button" onClick={deletePostClick}>Delete</button>}
            {postData.most_popular_comment &&
                <Comment key={postData.most_popular_comment.id}
                    comment={postData.most_popular_comment} />}
        </div>
    )
}
