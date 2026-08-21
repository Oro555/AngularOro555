import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  obtenerPerfil(): Observable<any>{
    return of ({
      nombre: 'Marco Uriel Rosas',
      rol: 'Desarrollador',
      avatar: 'https://dicebear.com'
    }).pipe(delay(1500));
  }
  constructor() { }
}
