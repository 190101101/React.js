import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {
	value: 0, 
	isCounterInvisible: false,
};

const CounterSlice = createSlice({
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

export const counterActions = CounterSlice.actions;
export default CounterSlice.reducer;