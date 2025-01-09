import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://localhost:8081/api/reclamations';

  constructor(private http: HttpClient) { }

  getReclamations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getReclamationById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  respondReclamation(id: number, response: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/response`, { response });
  }

}
