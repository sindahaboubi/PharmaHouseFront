import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importez Router
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-order-detail', // Changez le sélecteur si nécessaire
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: any;
  availableStatuses: string[] = ['Livré', 'En cours', 'Annulé']; // Assurez-vous que ces statuts sont corrects


  constructor(
    private route: ActivatedRoute,
    private router: Router, // Injectez Router
    private orderService: OrderService
  ) { }


  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(orderId).subscribe(order => {
      this.order = order;
    });
  }

  printOrder(): void {
    // Implémentez la logique pour imprimer la commande
    window.print();
  }

  viewInvoice(): void {
    // Implémentez la logique pour voir la facture
    alert('Voir la facture'); // Remplacez par la logique réelle
  }

  viewDeliveryNote(): void {
    // Implémentez la logique pour voir le bon de livraison
    alert('Voir le bon de livraison'); // Remplacez par la logique réelle
  }

  partialRefund(): void {
    // Implémentez la logique pour le remboursement partiel
    alert('Remboursement partiel'); // Remplacez par la logique réelle
  }

  updateStatus(status: string): void {
    this.orderService.updateOrderStatus(this.order.id, status).subscribe(updatedOrder => {
      this.order = updatedOrder;
    });
  }

  viewDetails(orderId: number): void {
    this.router.navigate(['/order-details', orderId]); // Utilisez router au lieu de route
  }
}
