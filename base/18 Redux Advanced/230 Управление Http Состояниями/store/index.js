import {configureStore} from '@reduxjs/toolkit';
import MainSlice from './MainSlice';
import CartSlice from './CartSlice';

const store = configureStore({
    reducer: {
        main: MainSlice.reducer,
        cart: CartSlice.reducer,
    }
});

export default store;