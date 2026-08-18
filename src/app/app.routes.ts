import { Routes } from '@angular/router';

import { Padre } from '../components/padre/padre';
import { OptimizacionImagenes } from '../components/optimizacion-imagenes/optimizacion-imagenes';
import { Contador } from '../components/contador/contador';
import { Formulario } from '../components/formulario/formulario';
import { Tasks } from '../Redux/tasks/tasks';
import { Cart } from '../Redux/cart/cart';
import { PipeComponent } from '../components/pipe/pipe.component';
//import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SolicitudVacacionesComponent } from '../components/solicitud-vacaciones/solicitud-vacaciones.component';

export const routes: Routes = [
  { path: '', redirectTo: '/Padre', pathMatch: 'full' },
  { path: 'Padre', component: Padre },
  { path: 'Imagenes', component: OptimizacionImagenes },
  { path: 'Contador', component: Contador },
  { path: 'Formulario', component: Formulario},
  { path: 'Tasks', component: Tasks},
  { path: 'Cart', component:Cart},
  { path: 'Pipe', component:PipeComponent },
  { path: 'Vacaciones', component:SolicitudVacacionesComponent}
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
  //DashboardComponent,
];

