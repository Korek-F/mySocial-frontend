import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

import { LoginForm } from '../components/forms/LoginForm';
import { useTypedSelector } from '../hooks/useTypeSelector';

export const Signin = () => {
    const navigate = useNavigate()
    const { access } = useTypedSelector(state => state.auth)

    useEffect(() => {
        if (access) {
            navigate("/")
        }
    }, [access])

    return (
        <div>
            <h1>Sign In</h1>
            <LoginForm />
        </div>
    )
}
