import { Routes } from '@angular/router';
import { CharacterListComponet } from './components/character-list-componet/character-list-componet';

export const routes: Routes = [
    {path: 'character-list', component:CharacterListComponet},
    {path:'', pathMatch:'full', redirectTo: '/character-list'}
];
