import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prise } from '../classes/Prise';

@Injectable({
  providedIn: 'root'
})
export class PriseService {
  private baseUrl = 'http://localhost:8081/prises';

  constructor(private http: HttpClient) { }

  addPrises(userId: number, prises: any[]): Observable<any> {
    const url = `${this.baseUrl}/CreatePrises/${userId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, prises, { headers });
  }

  getPrisesByUserId(userId: number): Observable<Prise[]> {
    return this.http.get<Prise[]>(`${this.baseUrl}/user/${userId}`);
  }


}
