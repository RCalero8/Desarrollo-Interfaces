import { Component, inject,signal } from '@angular/core';
import { FilmService } from '../../service/film-service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { Result } from '../../interface/film-response';
import { FilmModalComponent } from '../film-modal-component/film-modal-component';
import { ActivatedRoute } from '@angular/router';
import { FilmItemComponent } from '../film-item-component/film-item-component';
@Component({
  imports: [FilmItemComponent],
  selector: 'app-film-list-component',
  styleUrl: './film-list-component.css',
  templateUrl: './film-list-component.html',
})
export class FilmListComponent {
  private service = inject(FilmService);
  private modalService = inject(NgbModal);
  private route = inject(ActivatedRoute);
  list = signal<Result[]>([]);

  ngOnInit(): void {
    this.service.getAllFilm().subscribe((resp) => {
      this.list.set(resp.results);
    });
  }

  constructor() {
    this.route.params.subscribe((params) => {
      const view = params['view']; 
      const filter = params['filter']; 
    });
  }
}
