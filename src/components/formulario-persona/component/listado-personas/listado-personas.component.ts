import { Component } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { Cliente } from '../../model/cliente.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listado-personas',
  imports: [NgFor, NgIf],
  templateUrl: './listado-personas.component.html',
  styleUrl: './listado-personas.component.css',
})

export class ListadoPersonas {

  constructor(private clienteService: ClientesService) {}

  get clientes(): Cliente[] {
    return this.clienteService.getClientes();
  }

}
