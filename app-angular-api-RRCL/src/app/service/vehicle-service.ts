import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleResponse } from '../interface/vehicle-response';

@Service()
export class VehicleService {
    private http = inject(HttpClient)

    getAllVehicle() : Observable<VehicleResponse>{
        return this.http.get<VehicleResponse>('http://swapi.dev/api/vehicles/')
    }

    getOneVehicle(id: string): Observable<VehicleResponse>{
        return this.http.get<VehicleResponse>(`http://swapi.dev/api/vehicles/${id}`)
    }
}
