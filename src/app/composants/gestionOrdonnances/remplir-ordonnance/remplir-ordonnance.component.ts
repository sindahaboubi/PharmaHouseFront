import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { Prise } from 'src/app/classes/Prise';
import { Medicament } from 'src/app/classes/medicament.model';
import { MedicamentService } from 'src/app/services/medicament.service';
import { PriseService } from 'src/app/services/prise.service';

@Component({
  selector: 'app-remplir-ordonnance',
  templateUrl: './remplir-ordonnance.component.html',
  styleUrls: ['./remplir-ordonnance.component.css']
})
export class RemplirOrdonnanceComponent {
  constructor(private medicamentService: MedicamentService,
    private priseService: PriseService
  ){}

  listMedicaments: Medicament[];
  filteredMedicaments: Medicament[] = [];
  searchKeyword: string = '';
  selectedMedicaments: Medicament[] = [];
  userId:number=1;
  prises: Prise[] = [];

  getMedicaments(): void {
    this.medicamentService.getAll().subscribe(
      data => {
        this.listMedicaments = data;
        this.filteredMedicaments = [...this.listMedicaments];
      },
      error => {
        console.error(error);
      }
    );
  }

  filterMedicaments(): void {
    this.filteredMedicaments = this.listMedicaments.filter(medicament =>
      medicament.titre.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

  getMedicamentImageUrl(medicament: Medicament): string {
    return `data:image/jpeg;base64,${medicament.photo}`;
  }

  ngOnInit(){
    this.getMedicaments();
  }


  onSelectMedicament(medicamentId: number): void {
    const selectedMedicament = this.listMedicaments.find(medicament => medicament.id === medicamentId);
    if (selectedMedicament && !this.selectedMedicaments.includes(selectedMedicament)) {
      this.selectedMedicaments.push(selectedMedicament);
      this.prises.push({
        medicament: selectedMedicament,
        priseJour: 0,
        priseMidi: 0,
        priseSoir: 0,
        dateDebutPrise: '',
        dateFinPrise: ''
      });
    }
  }

  onSave(): void {
    console.log(this.prises);
    this.priseService.addPrises(this.userId, this.prises).subscribe(
      response => {
        console.log('Prises enregistrées avec succès', response);
        location.reload();
      },
      error => {
        console.error('Erreur lors de l\'enregistrement des prises', error);
      }
    );
  }




}
