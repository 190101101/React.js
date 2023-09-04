import React, {useContext, useEffect, useState} from 'react';
import styles from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cartContext';

const HeaderCardButton = (props) => {

    const [isButtonAnimated, setIsButtonAnimated] = useState(false);

    const cartContext = useContext(CartContext);
    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0);

    const buttonClasses = `${styles.button} ${isButtonAnimated ? styles.bump : ''}`;

    useEffect(() => {
        if(cartContext.items.length === 0){
            return;
        }
        setIsButtonAnimated(true);

        const timer = setTimeout(() => {
            setIsButtonAnimated(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [cartContext.items]);

    return (
        <button onClick={props.onClick} className={buttonClasses}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>{props.text}</span>
            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
}

export default HeaderCardButton;