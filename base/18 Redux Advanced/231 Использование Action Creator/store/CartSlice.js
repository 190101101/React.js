import { createSlice } from '@reduxjs/toolkit';
import { mainActions } from './MainSlice';

const initialState = {
    items: [],
    itemsQuantity: 0
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.itemsQuantity++;
            if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    title: newItem.title,
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },
        removeItem(state, action){
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.itemsQuantity--;

            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
});

export const sendCartData = (cartData) => {
    return async (dispatchAction) => {
        dispatchAction(mainActions.showStatusMessage({
            status: 'pending',
            title: 'отправка данных',
            message: 'данные корзины отправляются на сервер...',
        }));

        const sendHttpRequest = async () => {
            const response = await fetch(
                'https://react-lesson-d3b03-default-rtdb.firebaseio.com/cart.json', 
                {
                    method: 'PUT',
                    body: JSON.stringify(cartData),
                }
            );

            if(!response.ok){
                throw new Error('Ошибка при отправке данных корзины');
            }
        }

        try{
            await sendHttpRequest();

            dispatchAction(mainActions.showStatusMessage({
                status: 'success',
                title: 'отправка данных успешно',
                message: 'данные корзины успешно отправлены на сервер',
            }));

        }catch(error){
            dispatchAction(mainActions.showStatusMessage({
                status: 'error',
                title: 'ошибка запроса ',
                message: 'Ошибка при отправке данных корзины',
            }));
        }
    };
};

export const cartActions = CartSlice.actions;
export default CartSlice;