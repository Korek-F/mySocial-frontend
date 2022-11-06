import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { changeLikeStatus, deletePost } from '../../redux/actionCreators/postActions'
import { PostInterface } from '../../redux/actionTypes/PostTypes'
import { Comment } from './Comment';
import { getProperDate } from '../../utils/getProperDate';
import { CommentForm } from './CommentForm';
import { UserAvatar } from '../images/UserAvatar';

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
        dispatch(changeLikeStatus(postData.id, true) as any)
    }



    return (

        <div className='post'>
            {postData.am_i_author &&
                <MdDelete className="delete-post" onClick={deletePostClick} />}

            <div className='post_author'>
                <Link className='profile_link'
                    to={"/profile/" + postData.author.username}>
                    <UserAvatar avatar_user={postData.author} />
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
            <Link className='post_link'
                to={"/post/" + postData.id}>
                <div className='post_content'>
                    <div className='post_title'><b> {postData.title} </b></div>

                    <div className='post_body'>
                        {postData.body}
                    </div>
                </div>
            </Link>

            <div className='post_actions'>
                {postData.is_liked_by_me ?
                    <HiHeart className="like-icon my-icon" onClick={likeOrDislike} /> :
                    <HiOutlineHeart className="like-icon my-icon" onClick={likeOrDislike} />
                }
                {postData.likes > 0 &&
                    <span className='like-count'>{postData.likes}</span>
                }
                <CommentForm post_id={postData.id} parent={null} />
            </div>







            {postData.most_popular_comment &&
                <Comment key={postData.most_popular_comment.id}
                    margin={3}
                    comment={postData.most_popular_comment}
                    is_most_popular={true}
                />}
        </div>

    )
}
