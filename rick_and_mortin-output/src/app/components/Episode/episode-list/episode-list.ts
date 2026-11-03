import { Component, inject, OnInit, signal } from '@angular/core';
import { EpisodeItem } from '../episode-item/episode-item'; 
import { EpisodeService } from '../../../service/episode-service';
import { EpisodeComponentResponse } from '../../../interface/episode-component-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeModal } from '../episode-modal/episode-modal';

@Component({
  imports: [EpisodeItem], 
  selector: 'app-episode-list',
  styleUrl: './episode-list.css',
  templateUrl: './episode-list.html',
})
export class EpisodeListComponent implements OnInit {
  episodeService = inject(EpisodeService);
  episodeList = signal<EpisodeComponentResponse[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(): void {
    this.episodeService.getAllEpisode().subscribe(resp => {
      this.episodeList.set(resp.results);
    });
  }

  openEpisodeModal(id: number | string) {
    this.episodeService.getOneEpisode(id).subscribe(resp => {
      const modalRef = this.modalService.open(EpisodeModal);
      modalRef.componentInstance.episodeDetail = resp;
    });
  }
}