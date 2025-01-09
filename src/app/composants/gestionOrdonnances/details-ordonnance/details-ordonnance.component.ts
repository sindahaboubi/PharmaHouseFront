import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prise } from 'src/app/classes/Prise';
import { Ordonnance } from 'src/app/classes/ordonnance';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';
import { DialogueSupprimerOrdonnanceComponent } from '../dialogue-supprimer-ordonnance/dialogue-supprimer-ordonnance.component';

@Component({
  selector: 'app-details-ordonnance',
  templateUrl: './details-ordonnance.component.html',
  styleUrls: ['./details-ordonnance.component.css']
})
export class DetailsOrdonnanceComponent {

  ordonnanceId: number;
  prises: Prise[];
  ordonnance: Ordonnance;
  nombreMedicaments: number;
  page:number=1;
  showInactiverButton: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private ordonnanceService: OrdonnanceService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ordonnanceId = +params.get('id');
      this.loadMedicaments();
      this.loadOrdonnanceDetails();
    });
  }

  loadMedicaments() {
    this.ordonnanceService.getMedicamentsByOrdonnance(this.ordonnanceId)
      .subscribe(
        (data) => {
          this.prises = data;
          this.nombreMedicaments = this.prises.length;
          console.log('Prises:', this.prises);
        },
        (error) => {
          console.error('Erreur lors de la récupération des prises:', error);
        }
      );
  }

  loadOrdonnanceDetails() {
    this.ordonnanceService.getOrdonnanceById(this.ordonnanceId)
      .subscribe(
        (data) => {
          this.ordonnance = data;
          console.log('Ordonnance:', this.ordonnance);
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails de l\'ordonnance:', error);
        }
      );
  }

  getEtatLabel(): string {
    return this.ordonnance && this.ordonnance.etat === 1 ? 'Active' : 'Inactive';
  }

  openImageInNewTab() {
    if (this.ordonnance.photo) {
      const imageUrl = 'data:image/jpeg;base64,' + this.ordonnance.photo;
      const byteCharacters = atob(imageUrl.split(',')[1]);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'image/jpeg' });
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');
    }
  }

    toggleInactiverButton() {
    this.showInactiverButton = !this.showInactiverButton;
  }

  updateEtatOrdonnance(newEtat: number): void {
    if (this.ordonnance.etat !== newEtat) {
      this.ordonnance.etat = newEtat;
      this.ordonnanceService.updateOrdonnance(this.ordonnance.id, this.ordonnance).subscribe(
        (updatedOrdonnance) => {
          this.ordonnance = updatedOrdonnance;
          console.log('Ordonnance mise à jour avec succès:', updatedOrdonnance);
          this.toastr.success('L\'état de l\'ordonnance a été mis à jour avec succès.');
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'ordonnance:', error);
          this.toastr.error('Erreur lors de la mise à jour de l\'ordonnance.');
        }
      );
    }
    this.showInactiverButton = false;
  }


  openDialogAndDelete(ordonnanceId: number): void {
    const dialogRef = this.dialog.open(DialogueSupprimerOrdonnanceComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteOrdonnance(ordonnanceId);
      } else {
        console.log('Suppression annulée');
      }
    });
  }

  deleteOrdonnance(ordonnanceId: number): void {
    this.ordonnanceService.deleteOrdonnance(ordonnanceId)
      .subscribe(
        () => {
            console.error('Erreur lors de la suppression');
        },
        error => {
          console.log('Suppression réussie');
          this.router.navigate(['/ordonnances']);
        }
      );
  }
}
