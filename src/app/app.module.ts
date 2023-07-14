import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddInvestmentComponent,
    InvestmentDetailsComponent,
    InvestmentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
