import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { editUser } from '../../redux/actionCreators/userActions'

type EditModalProps = {
    setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export const EditModal: FC<EditModalProps> = ({ setEdit }) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const updateUser = () => {
        const newData = new FormData() as any;
        if (name) {
            newData.append("name", name)
        }
        dispatch(editUser(newData) as any)
    }
    return (
        <div className='edit_profile_modal'>
            <span onClick={() => setEdit(false)}> X </span>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={updateUser}>Save</button>
        </div>
    )
}
