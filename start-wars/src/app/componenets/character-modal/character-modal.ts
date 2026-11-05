import { Component, inject } from '@angular/core';
import { Result } from '../../interface/character-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  imports: [],
  selector: 'app-character-modal',
  styleUrl: './character-modal.css',
  templateUrl: './character-modal.html',
})
export class CharacterModal {
  activeModal = inject(NgbActiveModal);
  characterDetail?: Result;
}
