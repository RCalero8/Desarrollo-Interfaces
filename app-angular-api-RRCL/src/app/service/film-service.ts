import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FilmResponse } from '../interface/film-response';
@Service()
export class FilmService {
    private http = inject(HttpClient)

    getAllFilm() : Observable<FilmResponse>{
        return this.http.get<FilmResponse>('https://swapi.dev/api/films')
    }

    getOneVehicle(id: string): Observable<FilmResponse>{
        return this.http.get<FilmResponse>(`https://swapi.dev/api/films/${id}`)
    }
}
