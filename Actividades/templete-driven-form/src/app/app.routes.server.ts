import { Routes } from '@angular/router';
import { Formulario } from './components/formulario/formulario';
import { NotFoundPages } from './pages/not-found-pages/not-found-pages';

export const serverRoutes: Routes = [
  {path: 'formulario', component: Formulario},
  {path: '**', component: NotFoundPages}
]