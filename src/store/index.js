import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter-slice";
import authSliceReducer from "./auth-slice";

// export const ACTION_TYPES = {
//   increment: "increment",
//   decrement: "decrement",
//   increase: "increase",
//   toggle: "toggle",
// };

// const counterReducer = (state = initialState, action) => {
//   if (action.type === ACTION_TYPES.increment) {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === ACTION_TYPES.increase) {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === ACTION_TYPES.decrement) {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === ACTION_TYPES.toggle) {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;
