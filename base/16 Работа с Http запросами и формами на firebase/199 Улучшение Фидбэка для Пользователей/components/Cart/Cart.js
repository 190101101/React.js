import React, {useContext, useState} from 'react';
import CartContext from '../../store/cartContext';
import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import SubmitOrder from './SubmitOrder';

const Cart = (props) => {

    const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
    const [isDataSubmitting, setIsDataSubmitting] = useState(false);
    const [wasDataSendingSuccesful, setWasDataSendingSuccesful] = useState(false);

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

    const submitOrderHandler = async (userData) => {
        setIsDataSubmitting(true);
        await fetch("https://react-lesson-d3b03-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user:userData,
                orderedMeals: cartContext.items,
            }),
        });

        setIsDataSubmitting(false);
        setWasDataSendingSuccesful(true);
        cartContext.clearCart();
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

    const cartModalContent = <React.Fragment>
        {cartItems}
        <div className={styles.total}>
            <span>итого</span>
            <span>{totalAmount}</span>
        </div>
        {isSubmitOrderAvailable && <SubmitOrder onSubmit={submitOrderHandler} onCancel={props.onHideCart}/>}
        {!isSubmitOrderAvailable && modalButtons}
    </React.Fragment>

    const dataSubmittingCartModalContent = <p>отправка данных заказа...</p>
    const dataWasSubmittedCartModalContent = <React.Fragment>
        <p>ваш заказ успешно отправлен...</p>
        <div className={styles.actions}>
            <button onClick={props.onHideCart} className={styles['button--alt']}>закрыт</button>
        </div>
    </React.Fragment>

    return (
        <Modal onHideCart={props.onHideCart}>
            {!isDataSubmitting && !wasDataSendingSuccesful && cartModalContent}      
            {isDataSubmitting && dataSubmittingCartModalContent}      
            {wasDataSendingSuccesful && dataWasSubmittedCartModalContent}
        </Modal>
    );
}

export default Cart;