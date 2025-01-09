import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/classes/Utilisateur';
import { UtilisateurService } from 'src/app/services/Utilisateur.service';

@Component({
  selector: 'app-pharmacies-proches',
  templateUrl: './pharmacies-proches.component.html',
  styleUrls: ['./pharmacies-proches.component.css']
})
export class PharmaciesProchesComponent implements OnInit {
  lati: number = 1;
  lngi: number = 1;
  util: Utilisateur = new Utilisateur();
  options;
  latlon;

  constructor(private utilisateurService: UtilisateurService) { }

  public addressChange(adresse: string) {
    let encodedAddress = encodeURIComponent(adresse);
    let src = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDeI_R-h5QoKql4K8GQVxv97588Ly-Ka3M&zoom=15&q=pharmacy+in+${encodedAddress}`;
    document.getElementById("frame").setAttribute("src", src);
  }

  ngOnInit(): void {
    this.utilisateurService.getActuelleUtilisateur(1).subscribe(data => {
      this.util = data;
      let encodedAddress = encodeURIComponent(this.util.adresse);
      console.log(encodedAddress);
      let src = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDeI_R-h5QoKql4K8GQVxv97588Ly-Ka3M&zoom=15&q=pharmacy+in+${encodedAddress}`;
      document.getElementById("frame").setAttribute("src", src);
    });
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("Localisation non autorisée par l'utilisateur.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("L'information sur la localisation est indisponible.");
        break;
      case error.TIMEOUT:
        console.log("Le temps de réponse est dépassé.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("Une erreur inconnue a été rencontrée.");
        break;
    }
  }
}
