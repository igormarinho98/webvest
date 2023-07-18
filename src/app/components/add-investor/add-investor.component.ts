import { Component, OnInit } from '@angular/core';
import { Investor } from 'src/app/models/investor';
import { InvestorService } from 'src/app/services/investor.service';

@Component({
  selector: 'app-add-investor',
  templateUrl: './add-investor.component.html',
  styleUrls: ['./add-investor.component.css']
})
export class AddInvestorComponent implements OnInit {

  investor: Investor = {

    
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
  submitted = false;

  ngOnInit(): void {
      
  }

  constructor(private investorService: InvestorService) {}


  saveInvestor():void {
    const data = {
      birthday: this.investor.birthday,
      cpf: this.investor.cpf,
      address: this.investor.address,
      city: this.investor.city,
      state: this.investor.state,
      email: this.investor.email,
      password: this.investor.password,
      firstName: this.investor.firstName,
      lastName: this.investor.lastName,
      zipCode: this.investor.zipCode,
      phoneNumber: this.investor.phoneNumber, 
    }

    this.investorService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      }
    })

  }

  newInvestor():void {
    this.investor = {
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

  }

}
