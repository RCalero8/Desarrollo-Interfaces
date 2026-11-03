import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {EpisodeComponentResponse} from '../../../interface/episode-component-response'
@Component({
  imports: [CommonModule],
  selector: 'app-episode-modal',
  styleUrl: './episode-modal.css',
  templateUrl: './episode-modal.html',
})
export class EpisodeModal {
  public activeModal: NgbActiveModal = inject(NgbActiveModal);

  @Input() episodeDetail?: EpisodeComponentResponse;
}
