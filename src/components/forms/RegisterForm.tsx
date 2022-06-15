import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/actionCreators/authActions'

export const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    const onSumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(username, email)

        dispatch(register(email, username, password) as any)
    }
    return (
        <div>
            <form onSubmit={onSumbitHandler}>
                <input type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-text" />
                <input type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-text" />
                <input type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-text" />
                <button type="submit" className='main_button'>Sign up</button>
            </form>
        </div>
    )
}
