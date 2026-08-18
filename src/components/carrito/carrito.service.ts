import { Injectable, Service } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductoInterface } from './producto.interface';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  //Datos simulado (Mock Data)
   private productosMock: ProductoInterface[] = [
    { id: 1, nombre: 'Laptop Gamer', precio: 1200, cantidad: 1 },
    { id: 2, nombre: 'Mouse Inalámbrico', precio: 45, cantidad: 2 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 90, cantidad: 1 }
  ];

  //obtiene los productos del servidor
  obetenerCarrito(): Observable<ProductoInterface[]> {
    return of (this.productosMock);
  }

  //Simula la eliminación
  eliminarProductoAPI(id:number): Observable<boolean>{
    console.log(`Producto ${id} eliminado del servidor`);
    return of(true);
  }
}
