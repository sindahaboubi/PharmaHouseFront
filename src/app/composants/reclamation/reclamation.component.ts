import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent {

  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  submissionMessage: string = '';

  constructor(private http: HttpClient, private router:Router) { }

  onSubmit() {
    const reclamation = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    this.http.post('http://localhost:8081/api/reclamations', reclamation)
      .subscribe(response => {
        console.log('Réclamation envoyée avec succès!', response);
        this.submissionMessage = 'Réclamation envoyée avec succès!';
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        this.router.navigate(['/reclamation-list']);
      }, error => {
        console.error('Erreur lors de l\'envoi de la réclamation', error);
        this.submissionMessage = 'Erreur lors de l\'envoi de la réclamation.';
      });
  }
}
