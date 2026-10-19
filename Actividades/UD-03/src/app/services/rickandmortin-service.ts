import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { RickandmortinListResponse } from '../interfaces/rickandmortin-list-response';

@Service()
export class RickandmortinService {
    http = inject(HttpClient);
    getAll(): Observable<RickandmortinListResponse> {
        return this.http.get<RickandmortinListResponse>('https://rickandmortyapi.com/api/episode')
    }
}
