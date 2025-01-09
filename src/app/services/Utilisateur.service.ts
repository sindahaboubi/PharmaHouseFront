import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../classes/Utilisateur';


const URL2 = "http://localhost:8081/utilisateurs";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  public getActuelleUtilisateur(id:number):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(URL2+"/utilisateurActuel/"+id);
  }

}
