import { Component } from '@angular/core';

@Component({
  selector: 'app-flujos-control',
  imports: [],
  templateUrl: './flujos-control.html',
  styleUrl: './flujos-control.css',
})
export class FlujosControl {
    
  isLoggedIn: boolean= false;

  iniciarSesion(): void{
  this.isLoggedIn = !this.isLoggedIn;
  } 

  operatingSystems = 
  [
    {id: 0, name: 'Marco Uriel Rosas Garcia'},
    {id: 1, name: 'Diego Cruz Montalvo'},
    {id: 2, name: 'Pedro Jimenez Rodriguez'},
    {id: 3, name: 'Carmen Ortiz Lopez'},
    {id: 4, name: 'Jhony Perez Guzman '},
  ];
}
