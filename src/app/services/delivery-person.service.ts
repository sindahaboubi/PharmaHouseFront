import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DeliveryPerson } from '../models/delivery-person.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryPersonService {
  private apiUrl = 'http://localhost:8081/api/deliverypersons'; // URL de base de votre API

  constructor(private http: HttpClient) {}

  getAllDeliveryPersons(): Observable<DeliveryPerson[]> {
    return this.http.get<DeliveryPerson[]>(`${this.apiUrl}`);
    // Utilisation de `${this.apiUrl}` pour récupérer tous les livreurs
  }

  getDeliveryPerson(id: number): Observable<DeliveryPerson> {
    return this.http.get<DeliveryPerson>(`${this.apiUrl}/${id}`);
    // Utilisation de `${this.apiUrl}/${id}` pour récupérer un livreur par ID
  }

  updateDeliveryPerson(deliveryPerson: DeliveryPerson): Observable<DeliveryPerson> {
    return this.http.put<DeliveryPerson>(`${this.apiUrl}/${deliveryPerson.id}`, deliveryPerson);
    // Utilisation de `${this.apiUrl}/${deliveryPerson.id}` pour mettre à jour un livreur par ID
  }

  // Ajoutez d'autres méthodes selon les besoins, comme la création ou la suppression de livreurs
}
