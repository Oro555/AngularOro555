import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ReactiveFormsModule, Validator} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {

  username = 'MarcoRosas';

  profileForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(this.profileForm.value.nombre + ' ' + this.profileForm.value.email);
  }

}
