import {useState} from 'react';

import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';

import styles from './AddUser.module.css';

const AddUser = (props)=>{

    const [formData, setFormData] = useState(
        {
            username :'',
            age: ''
        }
    );

    const [error, setError] = useState(false);

    const formSubmitted = (eventData)=>{
        eventData.preventDefault();      
        //form data validation
        if(formData.username.trim().length === 0 && formData.age < 1){
            setError(true);
            return;
        }

        props.userAdded(formData);
        setFormData( {
            username :'',
            age: ''
        });
        setError(false);
    }

    const formDataChanged = (eventData, prop)=>{
        setFormData(
            oldValue=>{
                const newValue = { ...oldValue };
                newValue[prop] = eventData.target.value;
                return newValue;
            }
        )
    }

    return(
        <Card>
            <form onSubmit={formSubmitted} className={styles.input}>
                <p className={error ? styles.errorLabelShown : styles.errorLabel}>Invalid input username is not entered or age is less than 1</p>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={eventData=>formDataChanged(eventData, 'username')}/>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    value={formData.age}
                    onChange={eventData=>formDataChanged(eventData, 'age')}
                    />
                <Button type="submit">Add User</Button>
            </form>
        </Card>        
    )
}

export default AddUser;