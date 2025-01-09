import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PriseService } from './prise.service';
import { Prise } from '../classes/Prise';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class RappelService {
  prises: Prise[] = [];

  constructor(private priseService: PriseService, private snackBar: MatSnackBar) {}

  chargePrisesEtPlanifieRappels(): void {
    const userId = 1;
    this.priseService.getPrisesByUserId(userId).subscribe(prises => {
      this.prises = prises;
      this.planifieRappels();
    });
  }

  planifieRappels(): void {
    const morningPrises = [];
    const noonPrises = [];
    const eveningPrises = [];

    this.prises.forEach(prise => {
      const startDate = moment(prise.dateDebutPrise);
      const endDate = moment(prise.dateFinPrise);
      const now = moment();

      if (now.isBetween(startDate, endDate, undefined, '[]')) {
        if (prise.priseJour) {
          morningPrises.push(prise);
        }
        if (prise.priseMidi) {
          noonPrises.push(prise);
        }
        if (prise.priseSoir) {
          eveningPrises.push(prise);
        }
      }
    });

    if (morningPrises.length > 0) {
      this.planifieRappel('Matin', morningPrises);
    }
    if (noonPrises.length > 0) {
      this.planifieRappel('Midi', noonPrises);
    }
    if (eveningPrises.length > 0) {
      this.planifieRappel('Soir', eveningPrises);
    }
  }

  planifieRappel(timeOfDay: string, prises: Prise[]): void {
    let alarmTime;
    switch (timeOfDay) {
      case 'Matin':
        alarmTime = moment().set({ hour: 10, minute: 22 });
        break;
      case 'Midi':
        alarmTime = moment().set({ hour: 12, minute: 23 });
        break;
      case 'Soir':
        alarmTime = moment().set({ hour: 22, minute: 30 });
        break;
    }

    if (moment().isBefore(alarmTime)) {
      const timeUntilAlarm = alarmTime.diff(moment());
      setTimeout(() => {
        this.declencheRappel(timeOfDay, prises);
      }, timeUntilAlarm);
    }
  }

  declencheRappel(timeOfDay: string, prises: Prise[]): void {
    const medicationTitles = prises.map(prise => prise.medicament?.titre).join(', ');
    this.snackBar.open(`Il est temps de prendre vos médicaments (${medicationTitles}) pour ${timeOfDay}.`, 'Fermer', {
      duration: 8000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }
}
