import React from 'react'
import { useParams } from 'react-router';

export const Post = () => {

    const { id } = useParams();

    return (
        <div>Post {id}</div>
    )
}
