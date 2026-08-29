import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { injectSelector, injectDispatch } from '@reduxjs/angular-redux';
import { selectAllProducts, deleteProduct, selectProduct } from '../../state/product.slice';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  private dispatch = injectDispatch();

  // Obtenemos la lista de productos de manera reactiva (Devuelve un Observable)
  products$ = injectSelector(selectAllProducts);

  editProduct(id: string) {
    this.dispatch(selectProduct(id));
  }

  deleteProduct(id: string) {
    if (confirm('¿Desea eliminar este registro?')) {
      this.dispatch(deleteProduct(id));
    }
  }
}
