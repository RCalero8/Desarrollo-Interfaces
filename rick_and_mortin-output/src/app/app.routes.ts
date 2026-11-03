import { Routes } from '@angular/router';
// Importa tus componentes (ajusta las rutas según la ubicación de tus archivos)
import { CharacterListComponet } from './components/Character/character-list-componet/character-list-componet'
import { EpisodeListComponent } from './components/Episode/episode-list/episode-list';

export const routes: Routes = [
  { path: '', redirectTo: 'characters', pathMatch: 'full' },
  
  { path: 'characters', component: CharacterListComponet },
  
  { path: 'episodes', component: EpisodeListComponent },
  
  { path: '**', redirectTo: 'characters' }
];