import {configureStore} from '@reduxjs/toolkit';
import mainSlice from './MainSlice';

const store = configureStore({
    reducer: {
        main: mainSlice.reducer,
    }
});

export default store;