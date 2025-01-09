import { Component } from '@angular/core';
import { Ordonnance } from 'src/app/classes/ordonnance';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(private ordonnanceService: OrdonnanceService){}

  listOrdonnances: Ordonnance[] = [];
  userId: number = 1;

  getOrdonnancesByUserId(): void {
    this.ordonnanceService.getOrdonnancesByUserId(this.userId).subscribe(
      data => {
        this.listOrdonnances = data.slice(0, 4); // Display only 4 ordonnances
        console.log(this.listOrdonnances);
      },
      error => {
        console.error(error);
      }
    );
  }

  viewDetails(id: number): void {
    // Handle view details action
    console.log('View details for ordonnance with id:', id);
  }

  ngOnInit(): void {
    this.startBackgroundTransition();
    this.getOrdonnancesByUserId();
  }

  startBackgroundTransition(): void {
    const images = document.querySelectorAll('.background-container img');
    let currentIndex = 0;

    setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;

      images[currentIndex].classList.remove('active');
      images[currentIndex].classList.add('inactive');
      images[nextIndex].classList.add('active');

      setTimeout(() => {
        images[currentIndex].classList.remove('inactive');
        currentIndex = nextIndex;
      }, 2000);
    }, 2000);
  }
}
