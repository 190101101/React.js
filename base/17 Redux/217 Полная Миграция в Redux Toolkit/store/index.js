import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {counter: 0, isCounterInvisible: false};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers:{
		increment(state){
			state.counter++;
		},
		decrement(state){
			state.counter--;
		},
		increace(state, action){
			state.counter = state.counter + action.payload;
		},
		setCounterVisibility(state){
			state.isCounterInvisible = !state.isCounterInvisible;
		},
	}
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;