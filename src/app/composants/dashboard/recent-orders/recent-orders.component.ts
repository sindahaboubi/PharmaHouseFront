import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
})
export class RecentOrdersComponent {
  orders = [
    { id: '001', customer: 'Alice', amount: 120, status: 'Livré' },
    { id: '002', customer: 'Bob', amount: 90, status: 'En cours' },
    { id: '003', customer: 'Charlie', amount: 150, status: 'Livré' }
  ];
}
