import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `http://localhost:8081/api/orders`; // Utilisez l'URL de l'API depuis l'environnement
  private selectedOrderSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  getOrderById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateOrderStatus(id: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}/status`, { status });
  }

  getDeliveries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/deliveries`);
  }

  setSelectedOrder(order: any): void {
    this.selectedOrderSubject.next(order);
  }

  getSelectedOrder(): Observable<any> {
    return this.selectedOrderSubject.asObservable();

  }


 /* getOrderStatistics(): Observable<OrderStatistics> {
    return this.http.get<OrderStatistics>(`${this.apiUrl}/statistics`);
  }*/
}
