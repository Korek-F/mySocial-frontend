import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { changeLikeStatus, deletePost, getPostDetails } from '../redux/actionCreators/postActions';
import { Link } from 'react-router-dom'
import { getProperDate } from '../utils/getProperDate';
import { Comment } from '../components/posts/Comment';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const Post = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { current_post } = useTypedSelector(state => state.posts)

    useEffect(() => {
        if (id) dispatch(getPostDetails(id) as any)

    }, [id])

    const deletePostClick = () => {
        if (id) dispatch(deletePost(current_post!.id) as any)
    }

    const likeOrDislike = () => {
        if (id) dispatch(changeLikeStatus(current_post!.id) as any)
    }

    return (
        current_post &&
        <div className='current_post'>
            <div className='post_author'>
                <Link className='profile_link'
                    to={"/profile/" + current_post.author.username}>
                    <img className="post_author_image"
                        src={current_post.author.avatar} />
                    <div className="post_author_username">
                        {current_post.author.name ?
                            <>{current_post.author.name} ({current_post.author.username})</> :
                            <> {current_post.author.username}</>
                        }
                    </div>
                </Link>
                <div className="post_date">
                    {getProperDate(current_post)}</div>
            </div>

            <div className='post_title'>{current_post.title} </div>

            <div className='post_body'>{current_post.body}</div>

            <div className='post_like'>
                {current_post.is_liked_by_me ?
                    <HiHeart className="like-icon" onClick={likeOrDislike} /> :
                    <HiOutlineHeart className="like-icon" onClick={likeOrDislike} />
                }
                {current_post.likes > 0 &&
                    <span className='like-count'>{current_post.likes}</span>
                }
            </div>
            {current_post.am_i_author &&
                <button className="main_button" onClick={deletePostClick}>Delete</button>}

            {current_post.post_comments.map(c => <Comment key={c.id} comment={c} />)}
        </div>
    )
}
