import { Component } from '@angular/core';
import { Hijo } from "../hijo/hijo";

@Component({
  standalone: true,
  selector: 'app-padre',
  imports: [Hijo],
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
  this.message = 'Hola';
}
}
