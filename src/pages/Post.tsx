import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from '../hooks/useTypeSelector';
import { changeLikeStatus, deletePost, getPost, getPostComments } from '../redux/actionCreators/postActions';
import { Link } from 'react-router-dom'
import { getProperDate } from '../utils/getProperDate';
import { Comment } from '../components/posts/Comment';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { CommentForm } from '../components/posts/CommentForm';
import { MdDelete } from "react-icons/md";

export const Post = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const { post, current_post_comments } = useTypedSelector(state => state.posts)
    const navigate = useNavigate();

    useEffect(() => {
        if (id) dispatch(getPostComments(id) as any)
        if (id) dispatch(getPost(id) as any)


    }, [id])

    const deletePostClick = () => {
        if (id) {
            dispatch(deletePost(post!.id) as any)
            return navigate(`/profile/${post?.author.username}`);
        }
    }

    const likeOrDislike = () => {
        if (id) dispatch(changeLikeStatus(post!.id, true) as any)
    }



    return (
        post &&
        <div className='current_post'>
            {post.am_i_author &&
                <MdDelete className="my-icon delete-post" onClick={deletePostClick} />}
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

            <div className='post_actions'>
                {post.is_liked_by_me ?
                    <HiHeart className="like-icon my-icon" onClick={likeOrDislike} /> :
                    <HiOutlineHeart className="like-icon my-icon" onClick={likeOrDislike} />
                }
                {post.likes > 0 &&
                    <span className='like-count'>{post.likes}</span>
                }
                <CommentForm post_id={post.id} parent={null} />
            </div>




            {current_post_comments?.map(c => <Comment key={c.id}
                is_most_popular={false}
                comment={c} margin={3} />)}

        </div>
    )
}
