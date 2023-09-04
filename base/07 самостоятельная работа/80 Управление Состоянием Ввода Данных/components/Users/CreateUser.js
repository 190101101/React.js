import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './CreateUser.module.css';
import React, {useState} from 'react';

const CreateUser = () => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');

    const createUserHandler = (event) => {
        event.preventDefault();

        const data = {
            name: inputName,
            age: inputAge,
        }

        console.log(data);
    }

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={createUserHandler}>
                <div>
                    <label htmlFor="name">name</label>
                    <input id="name" type="text" onChange={nameChangeHandler}/>
                </div>
                <div>
                    <label htmlFor="age">age</label>
                    <input id="age" type="age" onChange={ageChangeHandler}/>
                </div>
                <div>
                    <Button type="submit">add user</Button>
                </div>
            </form>
        </Card>
    );
}

export default CreateUser;