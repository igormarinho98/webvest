import { Component, OnInit } from '@angular/core';
import { Investor } from 'src/app/models/investor';
import { InvestorService } from 'src/app/services/investor.service';

@Component({
  selector: 'app-investor-list',
  templateUrl: './investor-list.component.html',
  styleUrls: ['./investor-list.component.css']
})
export class InvestorListComponent implements OnInit {

  investors?: Investor[];
  currentInvestor: Investor = {};
  currentIndex = -1 ;


  constructor(private investorService: InvestorService) { }


  ngOnInit(): void {
    this.listInvestor();
  }

  listInvestor():void {
    this.investorService.getAll()
    .subscribe({
      next: (data) => {
        this.investors = data;
        console.log(data);
      }
    })
  }

  refreshList(): void {
    this.listInvestor();
    this.currentInvestor = {};
    this.currentIndex = -1;
  }

  
setActiveInvestor(investor: Investor, index: number): void {
  this.currentInvestor = investor;
  this.currentIndex = index;
}

 


}
