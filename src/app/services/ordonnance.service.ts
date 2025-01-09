import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordonnance } from '../classes/ordonnance';
import { Medicament } from '../classes/medicament.model';
import { Prise } from '../classes/Prise';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class OrdonnanceService {
  private baseUrl = 'http://localhost:8081/ordonnances';

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getOrdonnancesByUserId(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`);
  }

  addOrdonnance(photo: File, userId: number): Observable<any> {
    const formData = new FormData();
    formData.append('photo', photo);
    formData.append('userId', userId.toString());
    return this.http.post<any>(`${this.baseUrl}/add`, formData);
  }

  createOrdonnanceAndAddMedicaments(userId: number, medicamentIds: number[], priseJour: number, priseMidi: number, priseSoir: number, dateDebutPrise: string, dateFinPrise: string): Observable<Ordonnance> {
    const url = `${this.baseUrl}/addMedicaments`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    const body = {
      userId: userId,
      medicaments: medicamentIds,
      priseJour: priseJour,
      priseMidi: priseMidi,
      priseSoir: priseSoir,
      dateDebutPrise: dateDebutPrise,
      dateFinPrise: dateFinPrise
    };

    return this.http.post<Ordonnance>(url, body, { headers: headers });
  }

  getMedicamentsByOrdonnance(ordonnanceId: number): Observable<Prise[]> {
    return this.http.get<Prise[]>(`${this.baseUrl}/${ordonnanceId}/medicaments`);
  }

  getOrdonnanceById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateOrdonnance(id: number, updatedOrdonnance: Ordonnance): Observable<Ordonnance> {
    return this.http.put<Ordonnance>(`${this.baseUrl}/${id}/updateEtat`, updatedOrdonnance);
  }


  deleteOrdonnance(ordonnanceId: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${ordonnanceId}`;
    return this.http.delete<any>(url);
  }






}
