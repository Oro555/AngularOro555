import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {

  numero: number = 0;

  sumar(): void {
    this.numero ++;
  }

  restar(): void {
    this.numero --;
  }

  reiniciar(): void {
    this.numero = 0;
  }
  
}
