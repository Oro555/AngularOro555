import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrls: ['./hijo.css'],
})
export class Hijo {
//Recibir la información del componente padre
@Input() datoHijo: string = '';

//Enviar Informacaión desde el componente hijo al componente padre
@Output() alEnviar = new EventEmitter<string>();

enviarData(){
  this.alEnviar.emit('Hola desde el componente hijo');
}

}
