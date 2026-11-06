import { Component } from '@angular/core';
import { FilmListComponent } from '../../component/film-list-component/film-list-component';

@Component({
  imports: [FilmListComponent],
  selector: 'app-film-list-page',
  styleUrl: './film-list-page.css',
  templateUrl: './film-list-page.html',
})
export class FilmListPage {}
