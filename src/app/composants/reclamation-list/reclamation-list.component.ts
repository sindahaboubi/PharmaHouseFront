import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../services/reclamation.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.css']
})
export class ReclamationListComponent implements OnInit {
  reclamations: any[] = [];
  displayedColumns: string[] = ['name', 'email', 'subject', 'message', 'response', 'consulter'];

  constructor(private reclamationService: ReclamationService,private router: Router) { }

  ngOnInit(): void {
    this.reclamationService.getReclamations().subscribe((data: any[]) => {
      this.reclamations = data;
      console.log(this.reclamations);
    }, error => {
      console.error('Erreur lors de la récupération des réclamations', error);
    });

  }


}
