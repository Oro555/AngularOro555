import { Routes } from '@angular/router';
import { Padre } from '../components/padre/padre';
import { Contador } from '../components/contador/contador';
import { Formulario } from '../components/formulario/formulario';
import { PipeComponent } from '../components/pipe/pipe.component';
// import { FormularioPersona } from '../components/formulario-persona/formulario-persona';
import { OptimizacionImagenes } from '../components/optimizacion-imagenes/optimizacion-imagenes';
import { Cart } from '../Redux/cart/cart';
import { Crud } from '../Redux/crud/crud';
import { Tasks } from '../Redux/tasks/tasks';

export const routes: Routes = [
  { path: '', redirectTo: '/Padre', pathMatch: 'full' },
  { path: 'Padre', component: Padre },
  { path: 'Imagenes', component: OptimizacionImagenes },
  { path: 'Contador', component: Contador },
  { path: 'Formulario', component: Formulario},
  // { path: 'FormularioPersona', component:FormularioPersona},
  { path: 'Tasks', component: Tasks},
  { path: 'Cart', component:Cart},
  { path: 'Pipe', component:PipeComponent },
  { path: 'Crud', component:Crud},
];

export const RoutingComponents = [
  Padre,
  OptimizacionImagenes,
  Contador,
  Formulario,
  // FormularioPersona,
  Tasks,
  Cart,
  PipeComponent,
  Crud,
];

