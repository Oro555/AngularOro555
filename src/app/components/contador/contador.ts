import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formulario } from "../formulario/formulario";
import { Counter } from "../../../features/counter/counter";

@Component({
  selector: 'app-contador',
  imports: [Counter],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  numero = 0;

  constructor(private route: ActivatedRoute) {}

  sumar(): void {
    this.numero++;
  }

  restar(): void {
    this.numero--;
  }

  reiniciar(): void {
    this.numero = 0;
  }
}
