import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  deliveries: any[] = [];
  displayedColumns: string[] = ['customer', 'address', 'deliveryDate','action'];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadDeliveries();
  }

  loadDeliveries(): void {
    this.orderService.getDeliveries().subscribe((deliveries: any[]) => {
      this.deliveries = deliveries;
    });
  }

  updateStatus(id: string, status: string): void {
    this.orderService.updateOrderStatus(id, status).subscribe(() => {
      this.loadDeliveries();
    });
  }
}
