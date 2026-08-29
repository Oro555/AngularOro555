import { Component } from '@angular/core';
import { ProductListComponent } from "./features/products/components/product-list/product-list.component";
import { ProductFormComponent } from "./features/products/components/producto-form/product-form.component";

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ProductListComponent, ProductFormComponent],
  templateUrl: './crud.html',
  styleUrl: './crud.css',
})
export class Crud {}
