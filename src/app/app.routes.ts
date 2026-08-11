import { Routes } from '@angular/router';

import { Padre } from './components/padre/padre';
import { OptimizacionImagenes } from './components/optimizacion-imagenes/optimizacion-imagenes';
import { Contador } from './components/contador/contador';
import { Formulario } from './components/formulario/formulario';
import { Tasks } from './tasks/tasks';
import { Cart } from './cart/cart';

export const routes: Routes = [
  { path: '', redirectTo: '/Padre', pathMatch: 'full' },
  { path: 'Padre', component: Padre },
  { path: 'Imagenes', component: OptimizacionImagenes },
  { path: 'Contador', component: Contador },
  { path: 'Formulario', component: Formulario},
  { path: 'Tasks', component: Tasks},
  { path: 'Cart', component:Cart},
];

export const RoutingComponents = [
  Padre,
  OptimizacionImagenes,
  Contador,
  Formulario,
  Tasks,
  Cart,
];

