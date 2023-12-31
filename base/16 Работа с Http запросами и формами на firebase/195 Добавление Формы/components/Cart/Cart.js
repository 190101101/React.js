import React, {useContext, useState} from 'react';
import CartContext from '../../store/cartContext';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import SubmitOrder from './SubmitOrder';

const Cart = (props) => {

    const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);

    const cartContext = useContext(CartContext);
    const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    }
    
    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    }

    const orderHandler = () => {
        setIsSubmitOrderAvailable(true);
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

    const modalButtons = (
        <div className={styles.actions}>
            <button onClick={props.onHideCart} className={styles['button--alt']}>закрыт</button>
            {hasItems && <button className={styles.button} onClick={orderHandler}>заказать</button>}
        </div>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>итого</span>
                <span>{totalAmount}</span>
            </div>
            {isSubmitOrderAvailable && <SubmitOrder onCancel={props.onHideCart}/>}
            {!isSubmitOrderAvailable && modalButtons}
        </Modal>
    );
}

export default Cart;