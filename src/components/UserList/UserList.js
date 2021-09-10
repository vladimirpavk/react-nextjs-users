import styles from './UserList.module.css';

const UserList = (props)=>{
    
    const userClicked = (idUser)=>{
        //console.log(props);
        props.deleteUser(idUser);
    }

    return(
        <div className={styles.users}>
            <ul>
                {
                    props.userlist.map(element=><li key={element.id} onClick={eventData=>userClicked(element.id)}>{element.id} - {element.username} - {element.age}</li>)
                }
            </ul>
        </div>
    )
}

export default UserList;