import { Component, effect } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { injectSelector, injectDispatch } from '@reduxjs/angular-redux';
import { Product } from '../../../../models/product.model';
import { addProduct, updateProduct, selectCurrentProduct, selectProduct } from "../../state/product.slice";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-fom.component.html'
})

export class ProductFormComponent {

  private injector = injectDispatch();
  private currentProduct$ = injectSelector(selectCurrentProduct);

  id = '';
  name = '';
  price = 0;
  description = '';
  isEditing = false;

  constructor() {
    effect(() => {
      const product = this.currentProduct$();
      if (product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.description = product.description;
        this.isEditing = true;
      } else {
        this.id = '';
        this.name = '';
        this.price = 0;
        this.description = '';
        this.isEditing = false;
      }
    });
  }

  saveProduct() {
    const productData: Product = {
      id: this.isEditing ? this.id : Date.now().toString(),
      name: this.name,
      price: this.price,
      description: this.description
    };

    if (this.isEditing) {
      this.injector(updateProduct(productData));
    } else {
      this.injector(addProduct(productData));
    }
    this.clearForm();
  }

  clearForm() {
  this.id = '';
  this.name = '';
  this.price = 0;
  this.description = '';
  this.isEditing = false;
  this.injector(selectProduct(null));
}
}
