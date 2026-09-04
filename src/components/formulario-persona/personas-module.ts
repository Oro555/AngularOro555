import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './service/clientes.service';
import { FormularioPersona } from './formulario-persona';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, FormularioPersona, BrowserModule],
  providers: [ClientesService]
})
export class PersonasModule {}
