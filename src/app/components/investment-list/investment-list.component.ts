import { Component, OnInit } from '@angular/core';
import { Investment } from 'src/app/models/investment.model';
import { InvestmentService } from 'src/app/services/investment.service';
 

@Component({
  selector: 'app-investment-list',
  templateUrl: './investment-list.component.html',
  styleUrls: ['./investment-list.component.css']
})
export class InvestmentListComponent implements OnInit {

  investments?: Investment[];
  currentInvestment: Investment = {};
  currentIndex = -1 ;
  type = '';
  investorId = '';

    constructor(private investmentService: InvestmentService) {}


    ngOnInit(): void{
      this.listInvestment();
    }



    listInvestment():void {
      this.investmentService.getAll()
      .subscribe({
        next: (data) => {
          this.investments = data;
          console.log(data);
        }
      })
    }

    refreshList(): void {
      this.listInvestment();
      this.currentInvestment = {};
      this.currentIndex = -1;
    }

    
  setActiveTutorial(investment: Investment, index: number): void {
    this.currentInvestment = investment;
    this.currentIndex = index;
  }

  searchTitle(): void {
    this.currentInvestment = {};
    this.currentIndex = -1;

    this.investmentService.findById(this.investorId)
      .subscribe({
        next: (data) => {
          this.investments = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
}
