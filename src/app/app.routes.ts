import { Routes } from '@angular/router';

import { Padre } from '../components/padre/padre';
import { OptimizacionImagenes } from '../components/optimizacion-imagenes/optimizacion-imagenes';
import { Contador } from '../components/contador/contador';
import { Formulario } from '../components/formulario/formulario';
import { Tasks } from '../Redux/tasks/tasks';
import { Cart } from '../Redux/cart/cart';
import { PipeComponent } from '../components/pipe/pipe.component';
import { PerfilUsuarioComponentComponent } from '../ciclos-de-vida/perfil-usuario-component/perfil-usuario-component.component';
import { UsuarioServiceService } from '../ciclos-de-vida/usuario-service.service';
//import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Padre', pathMatch: 'full' },
  { path: 'Padre', component: Padre },
  { path: 'Imagenes', component: OptimizacionImagenes },
  { path: 'Contador', component: Contador },
  { path: 'Formulario', component: Formulario},
  { path: 'Tasks', component: Tasks},
  { path: 'Cart', component:Cart},
  { path: 'Pipe', component:PipeComponent },
  { path: 'CiclosVida', component:PerfilUsuarioComponentComponent}
  //{ path: 'dashboard', component:DashboardComponent}
];

export const RoutingComponents = [
  Padre,
  OptimizacionImagenes,
  Contador,
  Formulario,
  Tasks,
  Cart,
  PipeComponent,
  PerfilUsuarioComponentComponent,
  //DashboardComponent,
];

