import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuitabilityComponent } from './components/suitability/suitability.component';
import { AddInvestorComponent } from './components/add-investor/add-investor.component';
import { InvestorDetailsComponent } from './components/investor-details/investor-details.component';
import { InvestorListComponent } from './components/investor-list/investor-list.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    AddInvestmentComponent,
    InvestmentDetailsComponent,
    InvestmentListComponent,
    SuitabilityComponent,
    AddInvestorComponent,
    InvestorDetailsComponent,
    InvestorListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
