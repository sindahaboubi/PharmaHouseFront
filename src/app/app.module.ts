import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './composants/layouts/navbar/navbar.component';
import { FooterComponent } from './composants/layouts/footer/footer.component';
import { SidebarComponent } from './composants/layouts/sidebar/sidebar.component';
import { AccueilComponent } from './composants/layouts/accueil/accueil.component';
import { ErreurComponent } from './composants/layouts/erreur/erreur.component';
import { ProposComponent } from './composants/layouts/propos/propos.component';
import { ListeOrdonnancesComponent } from './composants/gestionOrdonnances/liste-ordonnances/liste-ordonnances.component';
import { MedicamentFormComponent } from './composants/gestionMedicaments/medicament-form/medicament-form.component';
import { MedicamentListComponent } from './composants/gestionMedicaments/medicament-list/medicament-list.component';
import { ListeMedicamentsUserComponent } from './composants/gestionMedicaments/liste-medicaments-user/liste-medicaments-user.component';
import { CartComponent } from './composants/gestionMedicaments/cart/cart.component';
import { MedicamentDetailComponent } from './composants/gestionMedicaments/medicament-detail/medicament-detail.component';
import { ConfirmDialogComponent } from './composants/gestionMedicaments/confirm-dialog-component/confirm-dialog-component.component';
import { AjouterOrdonnanceComponent } from './composants/gestionOrdonnances/ajouter-ordonnance/ajouter-ordonnance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsOrdonnanceComponent } from './composants/gestionOrdonnances/details-ordonnance/details-ordonnance.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RemplirOrdonnanceComponent } from './composants/gestionOrdonnances/remplir-ordonnance/remplir-ordonnance.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core'; // Importer pour définir la locale des dates
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { ChatbotComponent } from './composants/gestionOrdonnances/chat-bot/chat-bot.component';
import { StatistiquesOrdonnanceComponent } from './composants/gestionOrdonnances/statistiques-ordonnance/statistiques-ordonnance.component';
import { NgChartsModule } from 'ng2-charts';
import { DialogueSupprimerOrdonnanceComponent } from './composants/gestionOrdonnances/dialogue-supprimer-ordonnance/dialogue-supprimer-ordonnance.component';
import { PharmaciesProchesComponent } from './composants/pharmacies-proches/pharmacies-proches.component';
import {MatInputModule} from '@angular/material/input';
import { GestionutilisateursComponent } from './composants/gestionutilisateurs/gestionutilisateurs.component';
import { ListeusersComponent } from './composants/gestionutilisateurs/listeusers/listeusers.component';
import { AjoutuserComponent } from './composants/gestionutilisateurs/ajoutuser/ajoutuser.component';
import { UpdateuserComponent } from './composants/gestionutilisateurs/updateuser/updateuser.component';

import { DashboardMedicamentsComponent } from './composants/gestionMedicaments/dashboard-medicaments/dashboard-medicaments.component';
import { MatStepperModule } from '@angular/material/stepper';


import { DeliveryListComponent } from './composants/delivery-list/delivery-list.component';
import { MatTableModule } from '@angular/material/table';
import { DeliveryService } from './services/delivery.service';
import { MatOptionModule } from '@angular/material/core';
import { OrderDetailComponent } from './composants/order-details/order-details.component';
import { ReclamationComponent } from './composants/reclamation/reclamation.component';
import { ReclamationListComponent } from './composants/reclamation-list/reclamation-list.component';
import { DashboardComponent } from './composants/dashboard/dashboard.component';
import { OverviewComponent } from './composants/dashboard/overview/overview.component';
import { StatisticsComponent } from './composants/dashboard/statistics/statistics.component';
import { RecentOrdersComponent } from './composants/dashboard/recent-orders/recent-orders.component';
import {BarChartModule} from "@swimlane/ngx-charts";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReclamationDetailComponent } from './composants/reclamation-detail/reclamation-detail.component';

import { ChatComponent } from './composants/chat/chat.component';
import { GoogleMapComponent } from './composants/google-map/google-map.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AccueilComponent,
    ErreurComponent,
    ProposComponent,
    ListeOrdonnancesComponent,
    MedicamentListComponent,
    MedicamentFormComponent,
    ListeMedicamentsUserComponent,
    CartComponent,
    MedicamentDetailComponent,
    ConfirmDialogComponent,
   AjouterOrdonnanceComponent,
   DetailsOrdonnanceComponent,
   RemplirOrdonnanceComponent,
   ChatbotComponent,
   StatistiquesOrdonnanceComponent,
   DialogueSupprimerOrdonnanceComponent,
   PharmaciesProchesComponent,
   GestionutilisateursComponent,
   ListeusersComponent,
   AjoutuserComponent,
   UpdateuserComponent,
   DashboardMedicamentsComponent,
    OrderDetailComponent,
    DeliveryListComponent,
    ReclamationComponent,
    ReclamationListComponent,
    DashboardComponent,
    OverviewComponent,
    StatisticsComponent,
    RecentOrdersComponent,
    ReclamationDetailComponent,
    ChatComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgChartsModule,
    MatInputModule,
    MatStepperModule,
    MatTableModule,
    MatOptionModule,
    BarChartModule,
    MatToolbarModule,
    FlexModule,
    MatListModule,
    NgxChartsModule,
    GoogleMapComponent
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    MatStepperModule,
    ReactiveFormsModule,
    DeliveryService
    // Add ReactiveFormsModule here if you're using reactive forms
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
