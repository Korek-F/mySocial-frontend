import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PostFrom } from '../components/forms/PostFrom'
import { Post } from '../components/posts/Post'
import { useTypedSelector } from '../hooks/useTypeSelector'
import { getPosts } from '../redux/actionCreators/postActions'

export const Home = () => {
    const dispatch = useDispatch()
    const { posts } = useTypedSelector(state => state.posts)

    useEffect(() => {
        dispatch(getPosts() as any)
    }, [])

    console.log(posts)
    return (
        <div className='posts_container'>
            <PostFrom />
            <h1> Postss</h1>
            {
                posts.map(e =>
                    <Post key={e.id} postData={e} />
                )
            }

        </div >
    )
}
