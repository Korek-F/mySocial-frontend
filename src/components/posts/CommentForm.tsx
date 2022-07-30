import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendComment } from '../../redux/actionCreators/postActions'

type CommentFormProps = {
    parent: number | null,
    post_id: number,
}

export const CommentForm: React.FC<CommentFormProps> = ({ post_id, parent }) => {
    const [show, setShow] = useState(false)
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()

    const sendCommentOnClick = () => {
        if (comment.length > 3) {
            dispatch(sendComment(post_id, comment, parent) as any)
            setComment("")
            setShow(false)
        }
    }
    return (
        <div className='comment_form'>
            {show ? <>
                <input type="text" className="comment_form_input" onChange={(e) => setComment(e.target.value)} />
                <button className="comment_form_send main-btn"
                    onClick={sendCommentOnClick}>Send</button>
                <span className="comment_form_show" onClick={() => setShow(false)}>Hide</span>
            </> :
                <span className="comment_form_show" onClick={() => setShow(true)}>
                    Reply
                </span>
            }
        </div>
    )
}
