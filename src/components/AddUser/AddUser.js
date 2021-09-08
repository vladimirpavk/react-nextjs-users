import {useState} from 'react';

import Button from '../UI/Button/Button';

import styles from './AddUser.module.css';

const AddUser = (props)=>{

    const [formData, setFormData] = useState(
        {
            username :'',
            age: ''
        }
    );

    const formSubmitted = (eventData)=>{
        eventData.preventDefault();        
    }

    const usernameChanged = (eventData)=>{
        //console.log(eventData.target.value);
        setFormData(
            oldValues=>{
                return{
                    ...oldValues,
                    'username': eventData.target.value
                }
            }
        )
    }

    const ageChanged = (eventData, anyValue)=>{
        console.log(eventData.target.value);
        setFormData(
            oldValues=>{
                return{
                    ...oldValues,
                    'age': eventData.target.value
                }
            }
        )
        console.log(anyValue);
    }

    const formDataChanged = (eventData, prop)=>{
        setFormData(
            oldValues=>{
                return{
                    ...oldValues,
                    prop:eventData.target.value
                }
            }
        )
    }

    return(
        <form onSubmit={formSubmitted} className={styles.input}>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={formData.username}
                onChange={usernameChanged}/>
            <label htmlFor="age">Age</label>
            <input
                id="age"
                type="number"
                value={formData.age}
                onChange={eventData=>formDataChanged(eventData, 'age')}
                />
            <Button type="submit">Add User</Button>
        </form>
    )
}

export default AddUser;