import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from '../../services/reclamation.service';

@Component({
  selector: 'app-reclamation-detail',
  templateUrl: './reclamation-detail.component.html',
  styleUrls: ['./reclamation-detail.component.css']
})
export class ReclamationDetailComponent implements OnInit {
  reclamationId: number;
  reclamation: any;
  responseText: any;
  public submissionMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reclamationService: ReclamationService // Injectez ReclamationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.reclamationId = +params['id'];
      this.fetchReclamationDetail(this.reclamationId);
    });
  }

  fetchReclamationDetail(id: number): void {
    this.reclamationService.getReclamationById(id).subscribe(data => {
      this.reclamation = data;
    });
  }

 submitResponse(): void {
    if (this.reclamation && this.responseText.trim()) {
      this.reclamationService.respondReclamation(this.reclamation.id, this.responseText).subscribe(() => {
        this.reclamation.response = this.responseText; // Mettre à jour la réclamation avec la réponse
        this.submissionMessage = 'Réponse envoyée avec succès!';
        console.log(`Réponse envoyée avec succès pour la réclamation ID ${this.reclamation.id}`);
        this.responseText = ''; // Réinitialiser le champ de texte
        this.router.navigate(['/reclamation-list']);
      }, error => {
        this.submissionMessage = 'Erreur lors de l\'envoi de la réponse.';
        console.error('Erreur lors de l\'envoi de la réponse', error);
      });
    } else {
      this.submissionMessage = 'Veuillez entrer une réponse.';
    }
  }





  consulterReclamation(id: number): void {
    this.router.navigate(['/reclamation-detail', id]);
  }
}
