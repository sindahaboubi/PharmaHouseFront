import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-supprimer-ordonnance',
  templateUrl: './dialogue-supprimer-ordonnance.component.html',
  styleUrls: ['./dialogue-supprimer-ordonnance.component.css']
})
export class DialogueSupprimerOrdonnanceComponent {
  constructor(public dialogRef: MatDialogRef<DialogueSupprimerOrdonnanceComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true); 
  }


}
