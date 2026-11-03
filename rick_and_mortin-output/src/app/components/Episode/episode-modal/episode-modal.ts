import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {EpisodeComponentResponse} from '../../../interface/episode-component-response'
import { Character } from '../../../interface/character-list-response';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
@Component({
  imports: [CommonModule],
  selector: 'app-episode-modal',
  styleUrl: './episode-modal.css',
  templateUrl: './episode-modal.html',
})
export class EpisodeModal implements OnInit{
  public activeModal: NgbActiveModal = inject(NgbActiveModal);
  private http: HttpClient = inject(HttpClient)

  @Input() episodeDetail?: EpisodeComponentResponse;
  @Input() characterImg?: Character

  //Manejar el estado de los personajes
  characters = signal<Character[]>([])
  isLoading = signal<boolean>(true)

  ngOnInit(): void {
    if (this.episodeDetail?.characters && this.episodeDetail.characters.length > 0) {
      // Mapeamos las URLs a peticiones HTTP GET
      const characterRequests = this.episodeDetail.characters.map((url: string) =>
        this.http.get<Character>(url)
      );

      // Ejecutamos todas las peticiones en paralelo
      forkJoin(characterRequests).subscribe({
        next: (data) => {
          this.characters.set(data);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Error al cargar personajes del episodio:', err);
          this.isLoading.set(false);
        }
      });
    } else {
      this.isLoading.set(false);
    }
  }
}
