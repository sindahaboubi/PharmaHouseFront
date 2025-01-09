import { Component } from '@angular/core';
import { RappelService } from './services/rappel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pharmaHouseFrontEnd';

  showSidebar = true;

  constructor(private router: Router, private rappelService: RappelService) {
    this.router.events.subscribe(() => {
      this.showSidebar = this.router.url !== '/';
    });
  }

  ngOnInit(): void {
    this.rappelService.chargePrisesEtPlanifieRappels();
  }


}
