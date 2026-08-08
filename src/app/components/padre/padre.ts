import { Component } from '@angular/core';
import { Hijo } from "../hijo/hijo";
import { FlujosControl } from "../flujos-control/flujos-control";

@Component({
  standalone: true,
  selector: 'app-padre',
  imports: [Hijo, FlujosControl],
  templateUrl: './padre.html',
  styleUrls: ['./padre.css'],
})
export class Padre {
  message = '';

  //Enviar Data desde el componente Padre
  saludoDesdePadre: string = 'Hola desde el componente Padre';

  //Recibir Data de Hijo
  recibirMensaje(mensaje: string){
  //console.log(mensaje); //en esta linea se recibe el texto de hijo
  }

  //Enviamos el mensaje
  showSecretMessage() {
  this.message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, sint omnis. Est excepturi, dicta iusto repudiandae nemo deserunt at id impedit. Alias ipsa minima voluptatibus recusandae tenetur nisi totam soluta!';
  }

}
