import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { EpisodeListResponse } from '../interface/episode-list-response';
import { EpisodeComponentResponse } from '../interface/episode-component-response';

@Service()
export class EpisodeService {
    private http  = inject(HttpClient)
    getAllEpisode(): Observable<EpisodeListResponse> {
        return this.http.get<EpisodeListResponse>('https://rickandmortyapi.com/api/episode');
    }

    getOneEpisode(id: number | string): Observable<EpisodeComponentResponse> {
        return this.http.get<EpisodeComponentResponse>(`https://rickandmortyapi.com/api/episode/${id}`);
    }
}
