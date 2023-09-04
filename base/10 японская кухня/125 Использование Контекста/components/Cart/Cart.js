import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = <ul className={styles['cart-items']}>{[{
        id: Math.random(),
        name: 'sushi', 
        amount: 2, 
        price: 10.99}
    ].map(item => <li key={Math.random()}>{item.name}</li>)}</ul>

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>итого</span>
                <span>49.99</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onHideCart} className={styles['button--alt']}>закрыт</button>
                <button  className={styles.button}>заказать</button>
            </div>
        </Modal>
    );
}

export default Cart;