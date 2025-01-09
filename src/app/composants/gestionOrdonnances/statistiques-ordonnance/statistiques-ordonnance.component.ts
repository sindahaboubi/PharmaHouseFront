import { Component } from '@angular/core';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { PriseService } from 'src/app/services/prise.service';
import { Prise } from 'src/app/classes/Prise';
import { Ordonnance } from 'src/app/classes/ordonnance';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-statistiques-ordonnance',
  templateUrl: './statistiques-ordonnance.component.html',
  styleUrls: ['./statistiques-ordonnance.component.css']
})
export class StatistiquesOrdonnanceComponent {
  constructor(private ordonnanceService: OrdonnanceService, private priseService: PriseService) { }
  mesOrdonnances: Ordonnance[] = [];
  chartData: any = {};
  userId = 1;
  ordonnances: Ordonnance[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
  };
  lineChartLabels: string[] = ['Actives', 'Inactives'];
  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartData: ChartDataset[] = [
    { data: [], label: 'Etat des ordonnances' }
  ];
  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Nombre des médicaments/ Ordonnance',
        font: { weight: 'bold', size: 16 }
      }
    }
  };

  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartData: ChartDataset[] = [
  ];


  loadOrdonnances() {
    this.ordonnanceService.getOrdonnancesByUserId(this.userId).subscribe((ordonnances: Ordonnance[]) => {
      this.ordonnances = ordonnances;

      const observables = this.ordonnances.map(ordonnance => {
        return this.ordonnanceService.getMedicamentsByOrdonnance(ordonnance.id);
      });
      forkJoin(observables).subscribe((responses: Prise[][]) => {
        this.barChartData = this.ordonnances.map((ordonnance, index) => {
          const prises = responses[index];
          this.barChartLabels = this.ordonnances.map((ordonnance, index) => `${index + 1}`);
          return { data: [prises.length], label: `Ordonnance ${index + 1}, Nombre de médicaments total` };
        });
      }, error => {
        console.error("Erreur lors de la récupération des prises:", error);
      });
    }, error => {
      console.error("Erreur lors de la récupération des ordonnances:", error);
    });
  }

  ngOnInit() {
    this.ordonnanceService.getOrdonnancesByUserId(this.userId).subscribe(ordonnances => {
      const activeCount = ordonnances.filter((ord: any) => ord.etat === 1).length;
      const inactiveCount = ordonnances.filter((ord: any) => ord.etat === 0).length;
      this.lineChartData = [
        { data: [activeCount, inactiveCount],
          label: 'Ordonnances',
          backgroundColor: 'pink'
       }
      ];
    });
    this.loadOrdonnances();


    this.ordonnanceService.getOrdonnancesByUserId(this.userId).subscribe((data: Ordonnance[]) => {
      this.mesOrdonnances = data;
      this.mesOrdonnances.sort((a, b) => new Date(a.dateCreation).getTime() - new Date(b.dateCreation).getTime());
      this.chartData.labels = this.mesOrdonnances.map(ordonnance => ordonnance.dateCreation);
      this.chartData.datasets = [
        {
          label: 'Numéro d\'ordonnance/ Date création',
          backgroundColor: 'rgba(30, 236, 30, 0.541)',
          data: this.mesOrdonnances.map((ordonnance, index) => index + 1)
        }
      ];
    });
  }
}
