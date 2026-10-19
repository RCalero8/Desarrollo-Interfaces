import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RickandmortinListComponetes } from './components/rickandmortin-list-componetes/rickandmortin-list-componetes';

@Component({
  imports: [RouterOutlet, RickandmortinListComponetes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('UD-03');
}
