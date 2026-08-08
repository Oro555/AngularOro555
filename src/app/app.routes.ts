import { Routes } from '@angular/router';

import { Padre } from './components/padre/padre';
import { OptimizacionImagenes } from './components/optimizacion-imagenes/optimizacion-imagenes';
import { Contador } from './components/contador/contador';
import { Formulario } from './components/formulario/formulario';

export const routes: Routes = [
  { path: '', redirectTo: '/Padre', pathMatch: 'full' },
  { path: 'Padre', component: Padre },
  { path: 'Imagenes', component: OptimizacionImagenes },
  { path: 'Contador', component: Contador },
  {path: 'Formulario', component:Formulario},
];

export const RoutingComponents = [
  Padre,
  OptimizacionImagenes,
  Contador,
  Formulario,
];

