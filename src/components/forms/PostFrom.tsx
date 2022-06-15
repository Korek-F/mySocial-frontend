import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../hooks/useTypeSelector'
import { sendPost } from '../../redux/actionCreators/postActions'

export const PostFrom = () => {
    const { user } = useTypedSelector(state => state.user)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const dispatch = useDispatch()

    const post = () => {
        if (title && text) {
            console.log(title, text)
            setTitle("")
            setText("")
            dispatch(sendPost(title, text) as any)
        }
    }
    return (
        <>
            {user &&
                <div className='post_form'>
                    <div className='post_author'>

                        <img className="post_author_image"
                            src={`${user.avatar}`} alt="Your profile avatar" />
                        <div className="post_author_username">
                            {user.username}</div>

                        <div className="post_date">
                            Now</div>
                    </div>

                    <input type="text" className='post_form_title'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Title" maxLength={200} />
                    <textarea className='post_form_text'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        placeholder="What's up?" maxLength={1000} />
                    <button className='main_button' onClick={post}
                    >Publish</button>
                </div>

            }
        </>
    )
}
