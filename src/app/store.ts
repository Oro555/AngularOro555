import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from '../Redux/tasks/store/tasks.slice';
import { cartReducer } from "../Redux/cart/store/cart.slice";
import counterReducer from "../Redux/counter/conter-slice";
import productReducer from "../Redux/crud/features/products/state/product.slice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasksFeature: tasksReducer,
        cartFeature: cartReducer,
        productsFeature: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
