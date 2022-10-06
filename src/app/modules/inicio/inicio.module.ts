import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SalesRatioComponent } from './components/grafico-vendas/grafico-vendas.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgApexchartsModule } from "ng-apexcharts";
import { TopCardsComponent } from './components/top-cards/top-cards.component';
import { VendasCardComponent } from './components/vendas-card/vendas-card.component';
import { FeedsComponent } from './components/feeds/feeds.component';


@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent,
    SalesRatioComponent,
    TopCardsComponent,
    VendasCardComponent,
    FeedsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ]
})
export class InicioModule { }
