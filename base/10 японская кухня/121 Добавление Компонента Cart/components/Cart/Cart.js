import styles from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={styles['cart-items']}>{[{
        id: 'm1', 
        name: 'sushi', 
        amount: 2, 
        price: 10.99}
    ].map(item => <li>{item.name}</li>)}</ul>

    return (
        <div>
            {cartItems}
            <div className={styles.total}>
                <span>итого</span>
                <span>49.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button--alt']}>закрыт</button>
                <button className={styles.button}>закрыт</button>
            </div>
        </div>
    );
}

export default Cart;