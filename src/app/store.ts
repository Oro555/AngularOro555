import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/features/counter/conter-slice";
import { tasksReducer } from '../Redux/tasks/store/tasks.slice';
import { cartReducer } from "../Redux/cart/store/cart.slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasksFeature: tasksReducer,
        cartFeature: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
