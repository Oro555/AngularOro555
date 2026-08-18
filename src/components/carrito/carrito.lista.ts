import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductoInterface } from "./producto.interface";

@Component({
  selector: 'app-carrito-lista',
  standalone: true,
  imports: [CommonModule],
  template:`
  <!-- Si el carrito está vacío -->
    <p *ngIf="productos.length === 0" style="color: gray;">El carrito está vacío.</p>

    <!-- Tabla HTML que pinta los datos recibidos -->
    <table *ngIf="productos.length > 0" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr style="background-color: #f4f4f4; text-align: left;">
          <th style="padding: 8px;">Producto</th>
          <th style="padding: 8px;">Precio</th>
          <th style="padding: 8px;">Cantidad</th>
          <th style="padding: 8px;">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of productos" style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px;">{{ item.nombre }}</td>
          <td style="padding: 8px;">\${{ item.precio }}</td>
          <td style="padding: 8px;">
            <!-- Controlamos la cantidad disparando funciones locales -->
            <button (click)="modificarCantidad(item.id, item.cantidad - 1)">-</button>
            <span style="margin: 0 8px;">{{ item.cantidad }}</span>
            <button (click)="modificarCantidad(item.id, item.cantidad + 1)">+</button>
          </td>
          <td style="padding: 8px;">
            <button (click)="notificarEliminacion(item.id)" style="color: red;">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>`
})
export class CarritoListaComponent {
  // Entrada: Recibe datos de manera pasiva desde el contenedor
  @Input() productos: ProductoInterface[] = [];

  // Salidas: Avisos hacia el exterior para que el contenedor actúe
  @Output() eliminar = new EventEmitter<number>();
  @Output() cambiarCantidad = new EventEmitter<{ id: number, nuevaCantidad: number }>();

  notificarEliminacion(id: number) {
    // El componente Dumb no elimina nada, solo grita: "¡Oye contenedor, borra el ID tal!"
    this.eliminar.emit(id);
  }

  modificarCantidad(id: number, nuevaCantidad: number) {
    this.cambiarCantidad.emit({ id, nuevaCantidad });
  }
}


