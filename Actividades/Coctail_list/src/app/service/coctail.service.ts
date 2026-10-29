import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CoctailListResponse } from '../interface/coctail-list-response';

@Service()
export class CoctailService {
    http = inject(HttpClient);
    getAll(): Observable<CoctailListResponse> {
        return this.http.get<CoctailListResponse>('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    }
}
