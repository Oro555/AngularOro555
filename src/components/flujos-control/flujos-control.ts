import { Component } from '@angular/core';
import { SolicitudVacacionesComponent } from "../solicitud-vacaciones/solicitud-vacaciones.component";
import { NgIf, NgFor } from '@angular/common';
@Component({
  selector: 'app-flujos-control',
  imports: [SolicitudVacacionesComponent, NgFor],
  templateUrl: './flujos-control.html',
  styleUrl: './flujos-control.css',
})
export class FlujosControl {

  isLoggedIn: boolean = false;

  iniciarSesion(): void{
  this.isLoggedIn = !this.isLoggedIn;
  }

  operatingSystems =
  [
    {id: 0, name: 'Marco Uriel Rosas Garcia', email: 'marcou@gmail.com'},
    {id: 1, name: 'Diego Cruz Montalvo', email:'dierux@gmail.com'},
    {id: 2, name: 'Pedro Jimenez Rodriguez', email:'pedro2@gmail.com'},
    {id: 3, name: 'Carmen Ortiz Lopez', email:'carmend3@gmail.com'},
    {id: 4, name: 'Jhony Perez Guzman ', email:'jhon4e@gmail.com'},
  ];
}
