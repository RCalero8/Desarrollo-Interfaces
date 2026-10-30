import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterListComponet } from './components/character-list-componet/character-list-componet';

@Component({
  imports: [RouterOutlet,CharacterListComponet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('rick_and_mortin-output');
}
