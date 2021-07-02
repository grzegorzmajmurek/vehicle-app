import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarInfo } from '../store/vehicle/vehicle.model';

@Injectable({
    providedIn: 'root',
})

export class HttpService {

    constructor(private http: HttpClient) {}

    public VehicleDetails(brand: string): Observable<CarInfo> {
        const request = this.http.get<CarInfo>(`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${brand}?format=json`);
        return request;
    }
}
