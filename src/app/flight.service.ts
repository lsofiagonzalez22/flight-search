import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:5297/api/Flights/search';

  constructor(private http: HttpClient) { }

  searchFlights(origin?: string, destination?: string, currency?: string, type?: string): Observable<any> {
    let params = new HttpParams();

    if (origin) params = params.append('origin', origin);
    if (destination) params = params.append('destination', destination);
    if (currency) params = params.append('currency', currency);
    if (type) params = params.append('type', type);

    return this.http.get(this.apiUrl, { params });
  }
}
