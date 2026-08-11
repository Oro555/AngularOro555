import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
    id:  number;
    name:  string;
    price: number;
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0,
};
const calculateTotal = (state: CartState) => {
    state.totalPrice = state.items.reduce((sum, item) => sum +(item.price * item.quantity), 0);
};

export const cartSlice = createSlice ({
    name: 'cartFeature',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{id: number; name:String; price:number}>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
               // state.items.push({ ...action.payload, quantity: 1 });
        }

            calculateTotal(state);
        },

        removeFromcart: (state,  action:PayloadAction<number>) => {
            const existingItem = state.items.find(item => item.id === action.payload);

            if (existingItem){
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                }else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
            calculateTotal(state);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
        }

    }
});

export const {addToCart, removeFromcart, clearCart} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

export const selectCartItem = (state: { cartFeature: CartState }) => state.cartFeature.items;
export const selectCartTotal = (state: { cartFeature:  CartState }) => state.cartFeature.totalPrice;

