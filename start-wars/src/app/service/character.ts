import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponse } from '../interface/character-response';

@Service()
export class Character {
    private http = inject(HttpClient);

    getAllCharacter(): Observable<CharacterResponse> {
        return this.http.get<CharacterResponse>('https://swapi.dev/api/people')
    }

    getOne(id: string): Observable<CharacterResponse>{
        return this.http.get<CharacterResponse>(`https://swapi.dev/api/people/${id}`)
    }

}
