import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from '../../../interface/character-list-response';

@Component({
  imports: [CommonModule], 
  selector: 'app-character-modal',
  styleUrl: './character-modal.css',
  templateUrl: './character-modal.html',
})
export class CharacterModal {
  public activeModal: NgbActiveModal = inject(NgbActiveModal);

  @Input() characterDetail?: Character;
}