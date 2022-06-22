import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { changeLikeStatus, deletePost, getPost, getPostComments } from '../redux/actionCreators/postActions';
import { Link } from 'react-router-dom'
import { getProperDate } from '../utils/getProperDate';
import { Comment } from '../components/posts/Comment';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

export const Post = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { current_post_comments, post } = useTypedSelector(state => state.posts)

    useEffect(() => {
        if (id) dispatch(getPostComments(id) as any)
        if (id) dispatch(getPost(id) as any)


    }, [id])

    const deletePostClick = () => {
        if (id) dispatch(deletePost(post!.id) as any)
    }

    const likeOrDislike = () => {
        if (id) dispatch(changeLikeStatus(post!.id) as any)
    }

    return (
        post &&
        <div className='current_post'>
            <div className='post_author'>
                <Link className='profile_link'
                    to={"/profile/" + post.author.username}>
                    <img className="post_author_image"
                        src={post.author.avatar} />
                    <div className="post_author_username">
                        {post.author.name ?
                            <>{post.author.name} ({post.author.username})</> :
                            <> {post.author.username}</>
                        }
                    </div>
                </Link>
                <div className="post_date">
                    {getProperDate(post)}</div>
            </div>

            <div className='post_title'>{post.title} </div>

            <div className='post_body'>{post.body}</div>

            <div className='post_like'>
                {post.is_liked_by_me ?
                    <HiHeart className="like-icon" onClick={likeOrDislike} /> :
                    <HiOutlineHeart className="like-icon" onClick={likeOrDislike} />
                }
                {post.likes > 0 &&
                    <span className='like-count'>{post.likes}</span>
                }
            </div>
            {post.am_i_author &&
                <button className="main_button" onClick={deletePostClick}>Delete</button>}

            {current_post_comments!.map(c => <Comment key={c.id} comment={c} />)}
        </div>
    )
}
