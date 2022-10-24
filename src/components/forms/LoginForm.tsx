import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actionCreators/authActions';

export const LoginForm = () => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(login(username, password) as any)
    }
    return (
        <div>
            <form onSubmit={onSumbitHandler}>
                <input type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-text" />
                <input type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-text" />
                <button type="submit" className='login_button'>Login</button>
            </form>
        </div>
    )
}
