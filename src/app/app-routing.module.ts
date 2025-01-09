import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './composants/layouts/accueil/accueil.component';
import { ErreurComponent } from './composants/layouts/erreur/erreur.component';
import { ProposComponent } from './composants/layouts/propos/propos.component';
import { ListeOrdonnancesComponent } from './composants/gestionOrdonnances/liste-ordonnances/liste-ordonnances.component';
import { MedicamentFormComponent } from './composants/gestionMedicaments/medicament-form/medicament-form.component';
import { MedicamentListComponent } from './composants/gestionMedicaments/medicament-list/medicament-list.component';
import { ListeMedicamentsUserComponent } from './composants/gestionMedicaments/liste-medicaments-user/liste-medicaments-user.component';
import { CartComponent } from './composants/gestionMedicaments/cart/cart.component';
import { MedicamentDetailComponent } from './composants/gestionMedicaments/medicament-detail/medicament-detail.component';
import { DetailsOrdonnanceComponent } from './composants/gestionOrdonnances/details-ordonnance/details-ordonnance.component';
import { ChatbotComponent } from './composants/gestionOrdonnances/chat-bot/chat-bot.component';
import { StatistiquesOrdonnanceComponent } from './composants/gestionOrdonnances/statistiques-ordonnance/statistiques-ordonnance.component';
import { PharmaciesProchesComponent } from './composants/pharmacies-proches/pharmacies-proches.component';
import { DashboardMedicamentsComponent } from './composants/gestionMedicaments/dashboard-medicaments/dashboard-medicaments.component';
import { OrderDetailComponent } from 'src/app/composants/order-details/order-details.component';
import { ReclamationComponent } from 'src/app/composants/reclamation/reclamation.component';
import { ReclamationListComponent} from 'src/app/composants/reclamation-list/reclamation-list.component';
import { DashboardComponent } from './composants/dashboard/dashboard.component';
import { RecentOrdersComponent } from './composants/dashboard/recent-orders/recent-orders.component';
import { StatisticsComponent } from './composants/dashboard/statistics/statistics.component';
import { ReclamationDetailComponent} from "./composants/reclamation-detail/reclamation-detail.component";
import { ChatComponent } from './composants/chat/chat.component';
import { DeliveryListComponent } from './composants/delivery-list/delivery-list.component';

const routes: Routes = [
  { path: '', component: AccueilComponent }, // Default route
  { path: 'propos', component: ProposComponent },
  { path: 'ordonnances', component: ListeOrdonnancesComponent },
  { path: 'ordonnances/:id', component: DetailsOrdonnanceComponent},
  { path: 'medicaments', component: MedicamentListComponent },
  { path: 'medicamentsUser', component: ListeMedicamentsUserComponent },
  { path: 'medicaments/new', component: MedicamentFormComponent }, // Route for adding new medicament
  { path: 'medicaments/edit/:id', component: MedicamentFormComponent }, // Route for editing existing medicament
  { path: 'medicaments/:id', component: MedicamentDetailComponent }, // Add this route
  { path: 'dashboard', component: DashboardMedicamentsComponent },
  { path: 'cart', component: CartComponent }, // Route for cart
  { path: 'statOrdonnance', component: StatistiquesOrdonnanceComponent},
  { path: 'pharmaciesProches', component: PharmaciesProchesComponent},
  { path: 'Dashboard', component: DashboardComponent},
  { path: 'order-details/:id', component: OrderDetailComponent  },
  { path:'reclamation', component:ReclamationComponent},
  { path:'reclamation-list', component:ReclamationListComponent},
  { path: 'reclamation-detail/:id', component: ReclamationDetailComponent },
  { path: 'livraisons', component: DeliveryListComponent },
  { path: 'recent-orders', component: RecentOrdersComponent },
  { path: 'chat', component:ChatComponent },
  { path: 'chat/:userId', component:ChatComponent },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
