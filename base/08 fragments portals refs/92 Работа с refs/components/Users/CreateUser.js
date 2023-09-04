import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './CreateUser.module.css';
import React, {useState, useRef} from 'react';
import ErrorModal from '../UI/ErrorModal';

const CreateUser = (props) => {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const createUserHandler = (event) => {
        event.preventDefault();

        const inputUserName = nameInputRef.current.value;
        const inputUserAge = ageInputRef.current.value;


        if(inputUserName.trim().length === 0 || inputUserAge.trim().length === 0){
            setError({
                title:'incorrect input',
                message: 'these fields cannot be empty'
            });
            return;
        }

        if(+inputUserAge < 1){
            setError({
                title:'incorrect age',
                message: 'age must be greater than 0'
            });
            return;
        }

        props.onCreateUser(inputUserName, inputUserAge);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(false);
    }

    return (
        <React.Fragment>
            <Card className={styles.input}>
                {error && <ErrorModal title={error.title} message={error.message} 
                onCloseModal={errorHandler}/>}
                <form onSubmit={createUserHandler}>
                    <div>
                        <label htmlFor="name">name</label>
                        <input 
                            id="name" 
                            type="text" 
                            ref={nameInputRef}
                        />
                    </div>
                    <div>
                        <label htmlFor="age">age</label>
                        <input 
                            id="age" 
                            type="number" 
                            ref={ageInputRef}
                        />
                    </div>
                    <div>
                        <Button type="submit">add user</Button>
                    </div>
                </form>
            </Card>
        </React.Fragment>
    );
}

export default CreateUser;