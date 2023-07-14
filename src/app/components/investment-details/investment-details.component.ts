import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investment } from 'src/app/models/investment.model';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.css']
})
export class InvestmentDetailsComponent implements OnInit{

@Input() viewMode = false;

@Input() currentInvestment: Investment = {
  type: '',
  status: '',
  description: '',
  active: false,
  value: 0,
  investorId: 1,
  investedDate: '',
  maturity: 0,
  expectedreturn: 0,
  interestRate: 0,
}

message = '';


  constructor(
    private investmentService: InvestmentService,
    private route: ActivatedRoute,
    private router: Router ){}


  ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getInvestment(this.route.snapshot.params["id"]);
      }
  }

    
  getInvestment(id: any): void {
    this.investmentService.get(id)
    .subscribe({
      next: (data) => {
        this.currentInvestment = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

}
