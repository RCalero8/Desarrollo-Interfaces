import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse, BerryDetail } from '../interfaces/pokeapi';
import { API_URL } from '../interfaces/utils';

@Injectable({ providedIn: 'root' })
export class BerryService {
  private http = inject(HttpClient);
  private url = `${API_URL}/berry`;

  getBerries(limit = 20, offset = 0): Observable<ListResponse> {
    return this.http.get<ListResponse>(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  getBerry(id: string | number): Observable<BerryDetail> {
    return this.http.get<BerryDetail>(`${this.url}/${id}`);
  }
}
