// src/app/services/delivery.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Delivery } from '../models/delivery.model';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private deliveries: Delivery[] = [
    { id: 1, orderNumber: 'ORD001', customerName: 'John Doe', deliveryAddress: 'Tunisia', deliveryDate: new Date(), status: 'Pending', orderStatus: 'Processing', specialInstructions: 'Leave at the door' },
    { id: 2, orderNumber: 'ORD002', customerName: 'Jane Smith', deliveryAddress: '456 Elm St', deliveryDate: new Date(), status: 'Delivered', orderStatus: 'Completed', specialInstructions: 'Ring the bell twice' }
  ];

  getDeliveries(): Observable<Delivery[]> {
    return of(this.deliveries);
  }

  updateDeliveryStatus(id: number, status: string): void {
    const delivery = this.deliveries.find(d => d.id === id);
    if (delivery) {
      delivery.status = status;
    }
  }

  addDelivery(delivery: Delivery): void {
    this.deliveries.push(delivery);
  }
}
