import styles from './UserList.module.css';
import Card from '../UI/Card';

const UserList = (props) => {
    const users = [
        {name:'kuki', age: '7'},
        {name:'apsi', age: '14'},
        {name:'caiser', age: '14'},
        {name:'ketty', age: '10'},
    ]
    
    return (
        <Card className={styles.users}>
            <ul>
                {users.map((user) => (
                    <li key={Math.random()}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </Card>
    );
}

export default UserList;