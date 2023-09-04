import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialUserAuthState = {
	isUserLoggedIn: false, 
};

const UserAuthSlice = createSlice({
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

export const userAuthActions = UserAuthSlice.actions;
export default UserAuthSlice.reducer;