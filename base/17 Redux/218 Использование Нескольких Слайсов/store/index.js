import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialUserAuthState = {
	isUserLoggedIn: false, 
};

const initialCounterState = {
	value: 0, 
	isCounterInvisible: false,
};

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers:{
		increment(state){
			state.value++;
		},
		decrement(state){
			state.value--;
		},
		increace(state, action){
			state.value = state.value + action.payload;
		},
		setCounterVisibility(state){
			state.isCounterInvisible = !state.isCounterInvisible;
		},
	}
});

const userAuthSlice = createSlice({
	name: 'userAuth',
	initialState: initialUserAuthState,
	reducers: {
		logIn(state){
			state.isUserLoggedIn = true;
		},
		signOut(state){
			state.isUserLoggedIn = false;
		},
	}
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: userAuthSlice.reducer,
	}
});

export const counterActions = counterSlice.actions;
export const userAuthActions = userAuthSlice.actions;

export default store;