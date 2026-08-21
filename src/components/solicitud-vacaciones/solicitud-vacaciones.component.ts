import { Component, signal } from '@angular/core';
//import { NgSwitchCase, NgSwitch  } from '@angular/common';


type EstadoAprobado = 'PENDIENTE' | 'APROBADO' | 'RECHAZADO';

@Component({
  selector: 'app-solicitud-vacaciones',
  standalone: true,
  imports: [],
  templateUrl: './solicitud-vacaciones.component.html',
  styleUrl: './solicitud-vacaciones.component.css'
})
export class SolicitudVacacionesComponent {

  //Datos simulador de la solicitud
  empleado = 'Marco Uriel Rosas';
  DiasSolicitados = 5;
  fechaInicio = '2026-09-15';

  //Creamos el Singal con el estado inicial 'PENDIENTE'
  estadoActual = signal <EstadoAprobado> ('PENDIENTE');

  // Funciones para cambiar el estado de aprobación
  aprobarSolicitud() {
    this.estadoActual.set('APROBADO');
  }

  rechazarSolicitud() {
    this.estadoActual.set('RECHAZADO');
  }

  reiniciarSolicitud() {
    this.estadoActual.set('PENDIENTE');
  }
}
