import { Routes } from '@angular/router';
import { VehicleListPage } from './pages/vehicle-list-page/vehicle-list-page';
import path from 'path';
import { FilmListPage } from './pages/film-list-page/film-list-page';

export const routes: Routes = [
    {path:'/vehiculo', component: VehicleListPage},
    {path: '/pelicula', component: FilmListPage },
    {path: '/pelicula/id', component: FilmListPage },
    {path: ' ',  component: VehicleListPage},
    {path: '**', redirectTo: ''}
];
