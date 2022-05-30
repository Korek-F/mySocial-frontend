import React from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { login } from '../../redux/actionCreators/authActions';

export const LoginForm = () => {
    const dispatch = useDispatch()
    const { access } = useTypedSelector((state) => state.auth)

    const onSumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        dispatch(login("Filip", "ZAQ!2wsx") as any)
    }
    return (
        <div>
            <form onSubmit={onSumbitHandler}>
                <button type="submit">Login</button>
            </form>
            {access}
        </div>
    )
}
