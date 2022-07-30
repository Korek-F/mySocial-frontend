import React, { FC, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { editUser } from '../../redux/actionCreators/userActions'
import { TiDelete } from "react-icons/ti"
type EditModalProps = {
    setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditModal: FC<EditModalProps> = ({ setEdit }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState()
    const [cover, setCover] = useState()
    const { current_user } = useTypedSelector(state => state.user)
    const avatarRef = useRef<HTMLInputElement>(null);
    const coverRef = useRef<HTMLInputElement>(null);


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

    const showAvatar = () => {
        avatarRef.current?.click()
    }

    const showCover = () => {
        coverRef.current?.click()
    }
    return (
        <div className='edit_profile_modal'>
            <TiDelete onClick={() => setEdit(false)} className="close-icon" />
            <h1>Edit profile</h1>
            <input type="text" className='edit_name'
                placeholder="Name" onChange={(e) => setName(e.target.value)} />



            <div className='profile_upper' style={{ "margin": "1rem" }}>
                <img className="profile_avatar"
                    src={avatar ? URL.createObjectURL(avatar) : current_user.avatar} onClick={showAvatar}
                    alt="Profile avatar" />
                <img className="profile_cover"
                    src={cover ? URL.createObjectURL(cover) : current_user.cover}
                    alt="Profile cover"
                    onClick={showCover} />
            </div>

            <input type="file" ref={avatarRef} onChange={(e) => handleAvatar(e)} style={{ "display": "none" }} />
            <input type="file" ref={coverRef} onChange={(e) => handleCover(e)} style={{ "display": "none" }} />

            <button onClick={updateUser} className="main_button">Save</button>
        </div>
    )
}
