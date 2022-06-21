import React from 'react'
import { CommentInterface } from '../../redux/actionTypes/PostTypes'
import { Link } from 'react-router-dom'
import { getProperDate } from '../../utils/getProperDate'

type CommentProps = {
    comment: CommentInterface,
    key: number,
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
    console.log(comment)
    return (
        <div className='comment'>
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
        </div>
    )
}
