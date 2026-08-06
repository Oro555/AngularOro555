import { Component } from '@angular/core';

@Component({
  selector: 'app-flujos-control',
  imports: [],
  templateUrl: './flujos-control.html',
  styleUrl: './flujos-control.css',
})
export class FlujosControl {

  isLoggedIn = false;

  operatingSystems = 
  [
    {id: 0, name: 'Marco'},
    {id: 1, name: 'Diego'},
    {id: 2, name: 'Pedro'},
    {id: 3, name: 'Carmen'},
    {id: 4, name: 'Jhony'},
  ];
}
