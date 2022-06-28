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
        <div>
            {show ? <>
                <input type="text" onChange={(e) => setComment(e.target.value)} />
                <button onClick={sendCommentOnClick}>Send</button>
                <span onClick={() => setShow(false)}>Hide</span>
            </> :
                <div onClick={() => setShow(true)}>
                    Reply
                </div>
            }
        </div>
    )
}
