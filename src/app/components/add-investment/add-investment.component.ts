import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/app/models/investment.model';
import { InvestmentService } from 'src/app/services/investment.service';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.css']
})
export class AddInvestmentComponent implements OnInit {

  investment: Investment = {
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

  submitted = false;


  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
      
  }


  saveInvestment(): void {
    
    const data = {

      type: this.investment.type,
      status: this.investment.status,
      description: this.investment.description,
      active: this.investment.active,
      value: this.investment.value,
      investorId: this.investment.investorId,
      investedDate: this.investment.investedDate,
      maturity: this.investment.maturity,
      expectedReturn: this.investment.expectedreturn,
      interestedRate: this.investment.interestRate,
    }

    this.investmentService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;

        }
      })



  }



  newInvestment(): void {
  this.investment = {
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

  }


}
