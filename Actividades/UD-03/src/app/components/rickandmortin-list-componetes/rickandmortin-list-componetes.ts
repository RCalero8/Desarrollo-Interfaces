import { Component, inject } from '@angular/core';
import { RickandmortinService } from '../../services/rickandmortin-service';
import { Episode } from '../../interfaces/rickandmortin-list-response';
import { RickandmortinItemComponetes } from '../rickandmortin-item-componetes/rickandmortin-item-componetes';
@Component({
  imports: [RickandmortinItemComponetes],
  selector: 'app-rickandmortin-list-componetes',
  styleUrl: './rickandmortin-list-componetes.css',
  templateUrl: './rickandmortin-list-componetes.html',
})
export class RickandmortinListComponetes {
  rickandmortinService = inject(RickandmortinService);
  rickandmortinList: Episode[] = [];

  loadRickandMortinList() {
    this.rickandmortinService.getAll().subscribe(resp => {
      console.log(resp);
      this.rickandmortinList = resp.results;
    })
  }
}

