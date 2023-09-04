import Card from '../UI/Card';
import styles from './CreateUser.module.css';

const CreateUser = () => {

    const createUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={createUserHandler}>
                <div>
                    <label htmlFor="name">name</label>
                    <input id="name" type="text"/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input id="password" type="password"/>
                </div>
                <div>
                    <button type="submit">add user</button>
                </div>
            </form>
        </Card>
    );
}

export default CreateUser;