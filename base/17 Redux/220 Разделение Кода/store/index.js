import {configureStore} from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice';
import UserAuthReducer from './UserAuthSlice';

const store = configureStore({
	reducer: {
		counter: CounterReducer,
		auth: UserAuthReducer,
	}
});

export default store;