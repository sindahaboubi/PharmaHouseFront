import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface OrderStatistics {
  ordersCount: number;
  totalRevenue: number;
  uniqueCustomers: number;
}

@Injectable({
  providedIn: 'root'
})

export class OrderStatisticsService {
  private apiUrl = 'http://localhost:8081/api/orders_stat';

  constructor(private http: HttpClient) {}

  getOrderStatistics(): Observable<OrderStatistics> {
    return this.http.get<OrderStatistics>(`${this.apiUrl}/statistics`);
  }
}
