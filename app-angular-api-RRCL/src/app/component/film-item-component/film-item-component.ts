import { Component, input, output} from '@angular/core';
import { Result } from '../../interface/film-response';
@Component({
  imports: [],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {
  film= input<Result>();

  filmClicked = output<string>();

  getFilmId(): string {
    const url = this.film()?.url ?? '';
    return url.split('/').filter(Boolean).pop() ?? '';
  }

  emitFilmClicked() {
    this.filmClicked.emit(this.getFilmId());
  }
}
