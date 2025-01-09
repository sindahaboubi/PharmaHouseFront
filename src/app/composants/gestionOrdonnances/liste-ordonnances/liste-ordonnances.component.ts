import { Component } from '@angular/core';
import { Ordonnance } from 'src/app/classes/ordonnance';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';
import { MatDialog } from '@angular/material/dialog';
import { AjouterOrdonnanceComponent } from '../ajouter-ordonnance/ajouter-ordonnance.component';
import { RemplirOrdonnanceComponent } from '../remplir-ordonnance/remplir-ordonnance.component';
import { PriseService } from 'src/app/services/prise.service';
import { Prise } from 'src/app/classes/Prise';

@Component({
  selector: 'app-liste-ordonnances',
  templateUrl: './liste-ordonnances.component.html',
  styleUrls: ['./liste-ordonnances.component.css']
})
export class ListeOrdonnancesComponent {
  listOrdonnances: Ordonnance[];
  userId: number=1;
  prises:Prise[];

  constructor(private ordonnanceService: OrdonnanceService, private dialog: MatDialog,
    private priseService:PriseService
    ){}

  getOrdonnancesByUserId(): void {
    this.ordonnanceService.getOrdonnancesByUserId(this.userId).subscribe(
      data => {
        this.listOrdonnances = data;
        console.log(this.listOrdonnances);
      },
      error => {
        console.error(error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AjouterOrdonnanceComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog fermé');
    });
  }

  openDialogRemplirOrd(): void {
    const dialogRef = this.dialog.open(RemplirOrdonnanceComponent, {
      width: '800px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog fermé');
    });
  }

  ngOnInit(): void {
    this.getOrdonnancesByUserId();
    this.priseService.getPrisesByUserId(this.userId).subscribe(prises => {
      this.prises = prises;
    });
  }
}
