import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Usuario {
  username: string;
  rol: 'ADMIN' | 'CLIENTE';
  emial: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private usuaeriosSubject = new BehaviorSubject <Usuario | null>(null);

  public usuarios$: Observable<Usuario | null> = this.usuaeriosSubject.asObservable();

  iniciarSesion (user: string, pass: string): boolean {
    if ( user === 'admin' && pass === '1234') {
      const usuarioValido: Usuario = {username: 'Marco', rol: 'ADMIN', emial: 'email@gmail.com'};
      this.usuaeriosSubject.next(usuarioValido);
      return true;
    } else if (user === 'juan' && pass === '1234'){
      const usuarioValido: Usuario = {username: 'Juan Cliente', rol: 'CLIENTE', emial: 'juean@gmail.com'};
      this.usuaeriosSubject.next(usuarioValido);
      return true;
    }
    return false;
  }

  cerrarSesion(): void {
    this.usuaeriosSubject.next(null);
  }

  esAdministrador(): boolean {
    const usuarioActual = this.usuaeriosSubject.value;
    return usuarioActual?.rol === 'ADMIN';
  }
}
