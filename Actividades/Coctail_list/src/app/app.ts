import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoctailListComponets } from './components/coctail-list-componets/coctail-list-componets';

@Component({
  imports: [CoctailListComponets],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Coctail_list');
}
