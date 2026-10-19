import { Component, input} from '@angular/core';
import { Episode } from '../../interfaces/rickandmortin-list-response';

@Component({
  imports: [],
  selector: 'app-rickandmortin-item-componetes',
  styleUrl: './rickandmortin-item-componetes.css',
  templateUrl: './rickandmortin-item-componetes.html',
})
export class RickandmortinItemComponetes {
  episode = input<Episode>();

  constructor() {
    console.log(this.episode);
    debugger;
  }
}
