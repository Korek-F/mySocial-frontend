import React from 'react'
import { CommentInterface } from '../../redux/actionTypes/PostTypes'
import { Link } from 'react-router-dom'
import { getProperDate } from '../../utils/getProperDate'
import { changeLikeStatus, deleteComment } from '../../redux/actionCreators/postActions'
import { useDispatch } from 'react-redux'
import { CommentForm } from './CommentForm'
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { FiDelete } from "react-icons/fi";
import { UserAvatar } from '../images/UserAvatar'

type CommentProps = {
    comment: CommentInterface,
    margin: number,
    key: number,
    is_most_popular: boolean,
}

export const Comment: React.FC<CommentProps> = ({ comment, margin, is_most_popular }) => {
    const dispatch = useDispatch()
    const likeOrDislike = () => {
        dispatch(changeLikeStatus(comment!.id) as any)
    }

    const deleteCommentOnClick = () => {
        dispatch(deleteComment(comment.id) as any)
    }


    return (

        <>
            <div className='comment' style={{ marginLeft: margin + "rem" }}>
                <div className='comment_author'>
                    <Link className='profile_link'
                        to={"/profile/" + comment.author.username}>

                        <UserAvatar avatar_user={comment.author} />

                        <div className="post_author_username">
                            {comment.author.name ?
                                <>{comment.author.name} ({comment.author.username})</> :
                                <> {comment.author.username}</>
                            }
                        </div>
                    </Link>
                    <div className="post_date">{getProperDate(comment)}</div>

                    {(comment.am_i_author && !is_most_popular) &&
                        <div className='comment_options'>
                            <FiDelete className='delete_comment'
                                onClick={deleteCommentOnClick} />
                        </div>
                    }
                </div>
                <div className='comment_content'>
                    {comment.content}
                </div>
                {!is_most_popular &&
                    <>
                        <div className='post_actions'>
                            {comment.is_liked_by_me ?
                                <HiHeart className="like-icon my-icon comment_like" onClick={likeOrDislike} /> :
                                <HiOutlineHeart className="like-icon my-icon comment_like" onClick={likeOrDislike} />
                            }
                            {comment.likes > 0 &&
                                <span className='like-count'>{comment.likes}</span>
                            }

                            <CommentForm post_id={comment.post} parent={comment.id} />
                        </div>
                    </>
                }


            </div>
            {
                !is_most_popular &&
                comment.comment_child!.map(c =>
                    <Comment key={c.id}
                        is_most_popular={false} comment={c}
                        margin={margin > 20 ? margin : margin + 3} />)
            }

        </>
    )
}
