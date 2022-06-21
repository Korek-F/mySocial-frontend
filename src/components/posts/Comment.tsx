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
                    {comment.author.username}
                    <br />
                    {getProperDate(comment)}
                </Link>
            </div>
            {comment.content}
        </div>
    )
}
