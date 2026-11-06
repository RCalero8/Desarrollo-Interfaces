import { Component, inject } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap'
import { Result } from '../../interface/film-response';

@Component({
  imports: [],
  selector: 'app-film-modal-component',
  styleUrl: './film-modal-component.css',
  templateUrl: './film-modal-component.html',
})
export class FilmModalComponent {
  activeModal = inject(NgbActiveModal);
  filmDetail?: Result;
}
