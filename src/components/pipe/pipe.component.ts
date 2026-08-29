import { Component } from '@angular/core';
import { ReversePipePipe } from './reverse.pipe.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [ReversePipePipe, CommonModule, FormsModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  validarMoneda() {
    throw new Error('Method not implemented.');
  }
  textoIngresado: string = '';
  textoPipeMonedas: number | null = null;
  textoPipeNumeros: number = 0;

  limpiarInput(): void {
    this.textoIngresado = '';
    this.textoPipeMonedas = null;
    this.textoPipeNumeros = 0;
  }
}
