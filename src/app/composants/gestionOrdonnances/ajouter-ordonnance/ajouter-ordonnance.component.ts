import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Ordonnance } from 'src/app/classes/ordonnance';
import { OrdonnanceService } from 'src/app/services/ordonnance.service';

@Component({
  selector: 'app-ajouter-ordonnance',
  templateUrl: './ajouter-ordonnance.component.html',
  styleUrls: ['./ajouter-ordonnance.component.css']
})
export class AjouterOrdonnanceComponent {
  ordonnanceForm: FormGroup;
  selectedFile: File | undefined;
  imagePreviewUrl: string | ArrayBuffer | null = null;
  listOrdonnances: Ordonnance[];

  constructor(
    private fb: FormBuilder,
    private ordonnanceService: OrdonnanceService,
    private dialogRef: MatDialogRef<AjouterOrdonnanceComponent>
  ) {}

  ngOnInit() {
    this.ordonnanceForm = this.fb.group({
      photo: ['', Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0] as File;
    this.selectedFile = file;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  submitForm() {
    if (this.ordonnanceForm.invalid) {
      console.error("Le formulaire n'est pas valide");
      return;
    }

    if (!this.selectedFile) {
      console.error("Aucun fichier sélectionné");
      return;
    }

    const userId = 1;

    this.ordonnanceService.addOrdonnance(this.selectedFile, userId)
      .subscribe(
        (ordonnance: Ordonnance) => {
          console.log('Ordonnance ajoutée avec succès : ', ordonnance);
          this.resetForm();
          location.reload();
          this.closeModal();
        },
        (error) => {
          console.error('Erreur lors de la sauvegarde de l\'ordonnance : ', error);
        }
      );
  }


  resetForm() {
    this.ordonnanceForm.reset();
    this.selectedFile = undefined;
    this.imagePreviewUrl = null;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
