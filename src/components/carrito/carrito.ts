import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from './carrito.service';
import { CarritoListaComponent } from './carrito.lista';
import { ProductoInterface } from './producto.interface';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, CarritoListaComponent],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {
  listaProductos: ProductoInterface[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    // El contenedor se encarga de pedir los datos al nacer
    this.carritoService.obetenerCarrito().subscribe(datos => {
      this.listaProductos = datos;
    });
  }

  onEliminarProducto(id: number) {
    // El contenedor procesa la petición HTTP y actualiza el estado local
    this.carritoService.eliminarProductoAPI(id).subscribe(() => {
      this.listaProductos = this.listaProductos.filter(p => p.id !== id);
    });
  }

  onCambiarCantidad(evento: { id: number, nuevaCantidad: number }) {
    // El contenedor busca el producto y altera su cantidad
    const producto = this.listaProductos.find(p => p.id === evento.id);
    if (producto && evento.nuevaCantidad > 0) {
      producto.cantidad = evento.nuevaCantidad;
    }
  }

  calcularTotal(): number {
    return this.listaProductos.reduce((acc, p) => acc + (p.precio * p.cantidad), 0);
  }
}
