export interface DeliveryPerson {
  id: number;
  name: string;
  phone: string;
  email: string;
  assignedOrders: number[]; // Liste des IDs des commandes assignées
  // Autres propriétés pertinentes
}
