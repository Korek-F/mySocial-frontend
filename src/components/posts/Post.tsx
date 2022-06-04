import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/addresses'
import { PostInterface } from '../../redux/actionTypes/PostTypes'

type PostProps = {
    postData: PostInterface,
    key: number,
}

export const Post: React.FC<PostProps> = ({ postData }) => {
    return (
        <div className='post'>
            <div className='post_author'>
                <Link className='profile_link'
                    to={"profile/" + postData.author.username}>
                    <img className="post_author_image"
                        src={BASE_URL + postData.author.avatar} />
                    <div className="post_author_username">
                        {postData.author.username}</div>
                </Link>
                <div className="post_date">
                    {postData.created}</div>
            </div>

            <div className='post_title'>{postData.title} </div>

            <div className='post_body'>{postData.body}</div>
        </div>
    )
}
