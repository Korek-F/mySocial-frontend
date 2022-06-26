import React, { useDebugValue } from 'react'
import { CommentInterface } from '../../redux/actionTypes/PostTypes'
import { Link } from 'react-router-dom'
import { getProperDate } from '../../utils/getProperDate'
import { changeLikeStatus } from '../../redux/actionCreators/postActions'
import { useDispatch } from 'react-redux'

type CommentProps = {
    comment: CommentInterface,
    margin: number,
    key: number,
}

export const Comment: React.FC<CommentProps> = ({ comment, margin }) => {
    const dispatch = useDispatch()
    const likeOrDislike = () => {
        dispatch(changeLikeStatus(comment!.id) as any)
    }
    return (
        <>
            <div className='comment' style={{ marginLeft: margin + "rem" }} >
                <div className='comment_author'>
                    <Link className='profile_link'
                        to={"/profile/" + comment.author.username}>
                        <img className="post_author_image"
                            src={comment.author.avatar} />

                        <div className="post_author_username">
                            {comment.author.name ?
                                <>{comment.author.name} ({comment.author.username})</> :
                                <> {comment.author.username}</>
                            }
                        </div>
                    </Link>
                    <div className="post_date">{getProperDate(comment)}</div>
                </div>
                {comment.content}
                <div onClick={likeOrDislike}>
                    likes: {comment.likes}
                </div>
            </div>
            {
                comment.comment_child!.map(c =>
                    <Comment key={c.id} comment={c} margin={margin * 2} />)
            }
        </>
    )
}
