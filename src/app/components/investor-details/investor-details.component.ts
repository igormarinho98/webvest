import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investor } from 'src/app/models/investor';
import { InvestorService } from 'src/app/services/investor.service';

@Component({
  selector: 'app-investor-details',
  templateUrl: './investor-details.component.html',
  styleUrls: ['./investor-details.component.css']
})
export class InvestorDetailsComponent implements OnInit {


  @Input() viewMode = false;



  @Input() currentInvestor: Investor = {

    
    birthday: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    zipCode: '',
    phoneNumber: '',

  }

  message = '';
 
  constructor(
    private investorService: InvestorService,
    private route: ActivatedRoute,
    private router: Router ){}


  ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getInvestor(this.route.snapshot.params["id"]);
        }
  }

    
  getInvestor(id: any): void {
    this.investorService.get(id)
    .subscribe({
      next: (data) => {
        this.currentInvestor = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

 

}
