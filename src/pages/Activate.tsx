import React from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { useTypedSelector } from '../hooks/useTypeSelector';
import { verify } from '../redux/actionCreators/authActions';


export const Activate = () => {
    const { token } = useParams();
    const { loading, message } = useTypedSelector((state) => state.auth)
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
            {loading && <div>Loading</div>}
            {message && <div>{message}</div>}
        </div>
    )
}
