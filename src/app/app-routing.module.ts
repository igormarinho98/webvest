import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { InvestmentDetailsComponent } from './components/investment-details/investment-details.component';
import { AddInvestmentComponent } from './components/add-investment/add-investment.component';
import { AddInvestorComponent } from './components/add-investor/add-investor.component';
import { InvestorListComponent } from './components/investor-list/investor-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'investments', pathMatch: 'full' },
  { path: 'investments', component: InvestmentListComponent },
  { path: 'investments/:id', component: InvestmentDetailsComponent },
  { path: 'add', component: AddInvestmentComponent },
  { path: 'investor-add', component: AddInvestorComponent },
  { path: 'investors', component: InvestorListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
