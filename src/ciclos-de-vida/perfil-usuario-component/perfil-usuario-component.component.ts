import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from '../usuario-service.service';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
@Component({
  selector: 'app-perfil-usuario-component',
  standalone: true,
  templateUrl: './perfil-usuario-component.component.html',
  styleUrl: './perfil-usuario-component.component.css'
})
export class PerfilUsuarioComponentComponent  implements OnInit{

  usuario: any = null;
  cargando: boolean = true;

  constructor(private usuarioService: UsuarioServiceService){}

  ngOnInit(): void {
    console.log('El componente se ha inicializado. Iniciando carga de datos...');
    // Llamamos al servicio para obtener la información
    this.usuarioService.obtenerPerfil().subscribe({
      next: (datos) => {
        this.usuario = datos;     // Guardamos los datos recibidos
        this.cargando = false;    // Ocultamos el mensaje de "Cargando..."
      },
      error: (err) => {
        console.error('Error al cargar el usuario', err);
        this.cargando = false;
      }
    });
  }
}
