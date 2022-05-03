import Card from "../UI/Card"
import styles from './UserList.module.css'

import { useState } from "react"
import ErrorDelate from "../UI/ErrorDelate"

const UserList = (props)=>{

const [openModal, setOpenModal] = useState(false)

function deleteHandler (e) {
    props.onDelete(e.target.id);
    setOpenModal(false)
}


    return(
        <Card className={styles.users}>
            <ul>
                {props.users.map(user =>(
                    <li key={user.id}>
                        {user.name} {user.age} yars old
                        <button className={styles.button} onClick={()=> setOpenModal(true)}>Delete</button>
                        {openModal && (<ErrorDelate id={user.id} onDelete={deleteHandler} onNet={setOpenModal}/>)}
                    </li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList