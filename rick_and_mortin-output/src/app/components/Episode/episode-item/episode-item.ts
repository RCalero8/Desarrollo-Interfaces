import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-episode-item',
  imports: [],
  templateUrl: './episode-item.html',
  styleUrl: './episode-item.css'
})
export class EpisodeItem {
  episode = input<any>();
  episodeClicked = output<string | number>(); 

  emitEpisodeClicked() {
    const id = this.getEpisodeId();
    this.episodeClicked.emit(id); // Emitir string o number
  }

  getEpisodeId(): string {
    return this.episode()?.url.split("/")[5] || '';
  }
}