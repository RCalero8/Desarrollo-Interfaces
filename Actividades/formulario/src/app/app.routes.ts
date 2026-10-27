import { Routes } from '@angular/router';
import { Formulario } from './componets/formulario/formulario';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: 'formulario', component: Formulario },
    {path: '', pathMatch: 'full', redirectTo: '/formulario'},
    {path: '**', component: NotFoundPage}
];
