import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialCounterState = {counter: 0, showCounter: true}

const counterSlice= createSlice({
name : 'ReduxCounter',
initialState: initialCounterState,
reducers: {
     increment(state){
          state.counter++;
     },
     decrement (state){
          state.counter--;
     },
     increase(state,action){
          state.counter = state.counter + action.payload; //default name - payload.
     },
     toggleCounter (state){
          state.showCounter= !state.showCounter;
     }
}
});


const initialAuthenticationState = {
     isAuthenticated :false
}
const authSlice=createSlice({
     name: 'authentication',
     initialState: initialAuthenticationState,
     reducers: {
          login (state){
               state.isAuthenticated = true;
          },
          logout (state){
               state.isAuthenticated= false;
          }
     }
})

// function counterReducer(state = initialState, action) {
//      if (action.type === 'increment') {
//           return {
//                counter: state.counter + 1,
//                showCounter: state.showCounter,
//           };
//      }

//      if (action.type === 'decrement') {
//           return {
//                counter: state.counter - 1,
//                showCounter: state.showCounter,
//           };
//      }
//      if (action.type === 'increaseby5') {
//           return {
//                counter: state.counter + action.value,
//                showCounter: state.showCounter,
//           };
//      }
//      if (action.type === 'toggle') {
//           return {
//                counter: state.counter,
//                showCounter: !state.showCounter,
//           };
//      }
//      return state;
// }
const store = configureStore({
     reducer:{counter:counterSlice.reducer, auth: authSlice.reducer} 
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
