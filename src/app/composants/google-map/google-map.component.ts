import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from "../../classes/Utilisateur";
import { UtilisateurService } from "../../services/Utilisateur.service";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() address: string;
  util: Utilisateur = new Utilisateur();
  options;
  latlon;

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.updateMap(this.address);
  }

  ngOnChanges(): void {
    if (this.address) {
      this.updateMap(this.address);
    }
  }

  private updateMap(adresse: string): void {
    if (adresse) {
      let encodedAddress = encodeURIComponent(adresse);
      let src = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDeI_R-h5QoKql4K8GQVxv97588Ly-Ka3M&zoom=15&q=pharmacy+in+${encodedAddress}`;
      document.getElementById("frame").setAttribute("src", src);
    }
  }

  addressChange(adresse: string): void {
    this.updateMap(adresse);
  }
}
