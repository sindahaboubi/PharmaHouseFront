import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {
  data = [
    { name: 'Mai', value: 5000 },
    { name: 'Juin', value: 3000 },
    { name: 'Jullet', value: 4000 }
  ];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
