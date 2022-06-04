import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { verify } from '../redux/actionCreators/authActions';


export const Activate = () => {
    const { token } = useParams();
    const dispatch = useDispatch()

    const goVerify = () => {
        console.log("verify")
        dispatch(verify(`${token}`) as any)
    }

    return (
        <div>
            <h1>Verification</h1>
            <button onClick={goVerify}>
                Activate
            </button>
        </div>
    )
}
