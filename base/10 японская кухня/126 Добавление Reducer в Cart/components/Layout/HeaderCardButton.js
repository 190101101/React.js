import React, {useContext} from 'react';
import styles from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cartContext';

const HeaderCardButton = (props) => {

    const cartContext = useContext(CartContext);
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0);

    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>{props.text}</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
}

export default HeaderCardButton;