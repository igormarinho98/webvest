import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';

const routes: Routes = [
  { path: '', redirectTo: 'investments', pathMatch: 'full' },
  { path: 'investments', component: InvestmentListComponent },
  { path: 'investments/:id', component: InvestmentDetailsComponent },
  { path: 'add', component: AddInvestmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
