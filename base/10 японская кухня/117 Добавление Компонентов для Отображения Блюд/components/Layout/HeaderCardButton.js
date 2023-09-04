import styles from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCardButton = (props) => {
    return (
        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>{props.text}</span>
            <span className={styles.badge}>{[2]}</span>
        </button>
    );
}

export default HeaderCardButton;