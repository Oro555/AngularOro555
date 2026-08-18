import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { addToCart, removeFromcart, clearCart, selectCartItem, selectCartTotal } from './store/cart.slice';
import { injectDispatch, injectSelector } from '@reduxjs/angular-redux';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
   shopProducts = [
    { id: 101, name: 'Teclado Mecánico RGB', price: 85.00 },
    { id: 102, name: 'Ratón Gamer Inalámbrico', price: 45.50 },
    { id: 103, name: 'Monitor 24" Full HD 144Hz', price: 189.99 },
    { id: 104, name: 'Laptop Gaming Lenovo LOQ', price: 18499.99}
  ];

  cartItems = injectSelector(selectCartItem);
  totalPrice = injectSelector(selectCartTotal);

   dispatch = injectDispatch();

  onAddItem(product : { id: number; name: string; price: number}){
    this.dispatch(addToCart(product));
  }

  onRemoveItem (id: number) {
    this.dispatch(removeFromcart(id));
  }

  onClearCart() {
    this.dispatch(clearCart());
  }
  
}
