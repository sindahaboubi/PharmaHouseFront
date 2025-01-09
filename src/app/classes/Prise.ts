import { Medicament } from "./medicament.model";

export class Prise {
  id?: number;
  priseJour ?: number;
  priseMidi ?: number;
  priseSoir ?: number;
  dateDebutPrise ?: string;
  dateFinPrise ?: string;
  medicament?: Medicament;
  idOrdonnance?: number
}
