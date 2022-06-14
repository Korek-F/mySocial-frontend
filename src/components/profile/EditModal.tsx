import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editUser, getUserProfile } from '../../redux/actionCreators/userActions'

type EditModalProps = {
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditModal: FC<EditModalProps> = ({ setEdit }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState()
    const [cover, setCover] = useState()

    const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            setAvatar(e.target.files[0] as any)
        }
    }

    const handleCover = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null) {
            setCover(e.target.files[0] as any)
        }
    }

    const updateUser = () => {
        const newData = new FormData() as any;
        name && newData.append("name", name)
        avatar && newData.append("avatar", avatar)
        cover && newData.append("cover", cover)
        dispatch(editUser(newData) as any)
        setEdit(false)
    }
    return (
        <div className='edit_profile_modal'>
            <span onClick={() => setEdit(false)}> X </span>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <input type="file" onChange={(e) => handleAvatar(e)} />
            <input type="file" onChange={(e) => handleCover(e)} />

            <button onClick={updateUser}>Save</button>
        </div>
    )
}
