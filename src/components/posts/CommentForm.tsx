import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sendComment } from '../../redux/actionCreators/postActions'
import { AiOutlineSend } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { RiChatDeleteLine } from "react-icons/ri";
import { ActionType } from '../../redux/actionTypes/authTypes';

type CommentFormProps = {
    parent: number | null,
    post_id: number,
}

export const CommentForm: React.FC<CommentFormProps> = ({ post_id, parent }) => {
    const [show, setShow] = useState(false)
    const [comment, setComment] = useState("")
    const dispatch = useDispatch()

    const sendCommentOnClick = () => {
        if (comment.length > 1) {
            dispatch(sendComment(post_id, comment, parent) as any)
            setComment("")
            setShow(false)
        } else {
            dispatch({ type: ActionType.ERROR, payload: "Message can't be shorter than 2 marks." })
        }
    }
    return (
        <div className='comment_form'>
            {show ? <>
                <input type="text" className="comment_form_input" onChange={(e) => setComment(e.target.value)} />
                <AiOutlineSend className="send_button my-icon"
                    onClick={sendCommentOnClick} />
                <RiChatDeleteLine className="comment-icons my-icon" onClick={() => setShow(false)} />
            </> :
                <BiCommentAdd className="comment-icons my-icon" onClick={() => setShow(true)} />
            }
        </div>
    )
}
