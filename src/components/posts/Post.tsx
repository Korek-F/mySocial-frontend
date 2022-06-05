import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/addresses'
import { PostInterface } from '../../redux/actionTypes/PostTypes'

type PostProps = {
    postData: PostInterface,
    key: number,
}

export const Post: React.FC<PostProps> = ({ postData }) => {

    const getProperDate = () => {
        let date = new Date(postData.created).getTime() / 1000
        let now = new Date().getTime() / 1000
        let time = (now - date) / 60
        if (time > 60 * 24) {
            //older than a day
            if (time < 60 * 24 * 7) {
                return `${Math.floor(time / 60 * 24)} days ago`
            } else {
                return `More than a week ago`
            }
        } else {
            if (time > 60) {
                return `${Math.floor(time / 60)} hours ago`
            } else {
                return `${Math.floor(time)} minutes ago`
            }
        }

    }


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
                    {getProperDate()}</div>
            </div>

            <div className='post_title'>{postData.title} </div>

            <div className='post_body'>{postData.body}</div>
        </div>
    )
}
