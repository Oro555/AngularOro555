import { Component, OnInit } from '@angular/core';
import { AuthServiceService, Usuario } from '../../service/auth.service.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
   usuarioSesion: Usuario | null = null;
  asAdmin: boolean = false;

  constructor(private authService: AuthServiceService){}

  ngOnInit(): void {
    this.authService.usuarios$.subscribe(user => {
      this.usuarioSesion = user;

      this.asAdmin = this.authService.esAdministrador();
    })
  }
  ingresarComoAdmin(): void {this.authService.iniciarSesion('admin','1234');

  }
  ingresarComoCliente(): void {
    this.authService.iniciarSesion('juan', '1234');
  }

  salir(): void {
    this.authService.cerrarSesion();
  }

  eliminarBaseDatos(): void {
    alert('Accion peligrosa ejecutada con exito por el administrador. UwU');
  }
}
