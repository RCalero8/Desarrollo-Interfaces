import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse, PokemonDetail } from '../interfaces/pokeapi';
import { API_URL } from '../interfaces/utils';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private http = inject(HttpClient);
  private url = `${API_URL}/pokemon`;

  getPokemons(limit = 20, offset = 0): Observable<ListResponse> {
    return this.http.get<ListResponse>(`${this.url}?limit=${limit}&offset=${offset}`);
  }

  getPokemon(id: string | number): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.url}/${id}`);
  }
}
