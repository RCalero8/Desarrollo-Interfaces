import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse, ItemDetail } from '../interfaces/pokeapi';
import { API_URL } from '../interfaces/utils';

@Injectable({ providedIn: 'root' })
export class ItemService {
  private http = inject(HttpClient);
  private url = `${API_URL}/item`;

  getItems(limit = 20, offset = 0): Observable<ListResponse> {
    return this.http.get<ListResponse>(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  getItem(id: string | number): Observable<ItemDetail> {
    return this.http.get<ItemDetail>(`${this.url}/${id}`);
  }
}
