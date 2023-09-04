import { createSlice } from '@reduxjs/toolkit';
import { mainActions } from './MainSlice';

const initialState = {
    items: [],
    itemsQuantity: 0,
    isCartContentChanged: false,
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addItem(state, action){
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.itemsQuantity++;
            state.isCartContentChanged = true;
            
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
            state.isCartContentChanged = true;
            
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },

        updateCart(state, action){
            state.items = action.payload.items;
            state.itemsQuantity = action.payload.itemsQuantity;
        }
    }
});

export const sendCartData = (cartData) => {
    return async (dispatchAction) => {
        dispatchAction(mainActions.showStatusMessage({
            status: 'pending',
            title: 'отправка данных',
            message: 'данные корзины отправляются на сервер...',
        }));

        const sendDataHttpRequest = async () => {
            const response = await fetch(
                'https://react-lesson-d3b03-default-rtdb.firebaseio.com/cart.json', 
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cartData.items, 
                        itemsQuantity: cartData.itemsQuantity
                    }),
                }
            );

            if(!response.ok){
                throw new Error('Ошибка при отправке данных корзины');
            }
        }

        try{
            await sendDataHttpRequest();

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

export const getCartData = () => {
  return async (dispatchAction) => {
    const getDataHttpRequest = async () => {
      const response = await fetch(
        'https://react-lesson-d3b03-default-rtdb.firebaseio.com/cart.json'
      );
            
            if(!response.ok){
                throw new Error('невозможно извлечь данные');
            }

            const responseData = await response.json();
            return responseData;
        }

        try{
            const cartData = await getDataHttpRequest();
            dispatchAction(
                cartActions.updateCart({
                    items: cartData.items || [],
                    itemsQuantity: cartData.itemsQuantity
                })
            );
        }catch(error){
            dispatchAction(mainActions.showStatusMessage({
                status: 'error',
                title: 'ошибка запроса ',
                message: 'Ошибка при получение данных корзины',
            })); 
        }
    }
};

export default CartSlice;