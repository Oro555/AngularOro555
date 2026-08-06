import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Padre } from "./padre/padre";
import { FlujosControl } from "./flujos-control/flujos-control";
import { OptimizacionImagenes } from "./optimizacion-imagenes/optimizacion-imagenes";
import { Contador } from "./contador/contador";

@Component({
  selector: 'app-component',
  imports: [RouterOutlet, Padre, FlujosControl, OptimizacionImagenes, Contador],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  saludo = ' Open Road';
  
}
