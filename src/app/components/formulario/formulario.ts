import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  profileForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido:  new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),

  });

  handleSubmit() {
    alert('Registro exitoso ' + this.profileForm.value.nombre);
  }

}
