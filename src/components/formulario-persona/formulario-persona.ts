import { Component, OnInit } from '@angular/core';
import { ClientesService } from './service/clientes.service';
import { Grupo, Cliente } from './model/cliente.model';
import { ListadoPersonas } from "./component/listado-personas/listado-personas.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-persona',
  imports: [CommonModule, FormsModule, ListadoPersonas],
  templateUrl: './formulario-persona.html',
  styleUrl: './formulario-persona.css',
})
export class FormularioPersona implements OnInit {

  grupos: Grupo[] = [];
  cliente!: Cliente;

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.cliente = this.clienteService.nuevoCliente();
    this.grupos = this.clienteService.getGrupos();
  }

  nuevoCliente(): void {
    this.clienteService.agregarCliente(this.cliente);
    this.cliente = this.clienteService.nuevoCliente();
  }
}
