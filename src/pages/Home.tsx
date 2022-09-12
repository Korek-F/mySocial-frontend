import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { PostFrom } from '../components/forms/PostFrom'
import { Post } from '../components/posts/Post'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { getPosts } from '../redux/actionCreators/postActions'
import { AiOutlineArrowDown } from 'react-icons/ai';

export const Home = () => {
    const dispatch = useDispatch()
    const { posts, posts_meta } = useTypedSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPosts() as any)
    }, [])

    const load_more_posts = () => {
        dispatch(getPosts(posts_meta!.page + 1) as any)
    }


    return (
        <div className='posts_container'>
            <PostFrom />
            <h1> Posts</h1>
            {
                posts.map(e =>
                    <Post key={e.id} postData={e} />
                )
            }

            {(posts_meta && posts_meta.next) &&
                <button onClick={load_more_posts} className="load_more">
                    <AiOutlineArrowDown />
                </button>}


        </div >
    )
}
