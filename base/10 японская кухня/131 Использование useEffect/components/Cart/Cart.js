import React, {useContext} from 'react';
import CartContext from '../../store/cartContext';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    }
    
    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    }

    const cartItems = <ul className={styles['cart-items']}>{
        cartContext.items.map((item) => (
            <CartItem 
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onAdd={addCartItemHandler.bind(null, item)}
                onRemove={removeCartItemHandler.bind(null, item.id)}
            />
        ))}
    </ul>

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>итого</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onHideCart} className={styles['button--alt']}>закрыт</button>
                {hasItems && <button  className={styles.button}>заказать</button>}
            </div>
        </Modal>
    );
}

export default Cart;