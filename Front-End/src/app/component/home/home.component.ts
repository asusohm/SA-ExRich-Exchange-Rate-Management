import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
export interface Food {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  currencyCode: string;
  currencyName: string;
  curSelect: number;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {currencyCode: 'USD', currencyName: 'US Dollar', curSelect: 1.0079},
  {currencyCode: 'EUR', currencyName: 'Euro', curSelect: 4.0026},
  {currencyCode: 'GBP', currencyName: 'British Pound', curSelect: 6.941},
  {currencyCode: 'INR', currencyName: 'Indian Rupee', curSelect: 9.0122},
  {currencyCode: 'AUD', currencyName: 'Australian Dollar', curSelect: 10.811},
  {currencyCode: 'CAD', currencyName: 'Canadian Dollar', curSelect: 12.0107},
  {currencyCode: 'SGD', currencyName: 'Singapore Dollar', curSelect: 14.0067},
  {currencyCode: 'CHF', currencyName: 'Swiss Franc', curSelect: 15.9994},
  {currencyCode: 'MYR', currencyName: 'Malaysian Ringgit', curSelect: 18.9984},
  {currencyCode: 'JPY', currencyName: 'Japanese Yen', curSelect: 20.1797},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    
  }
  displayedColumns: string[] = ['currencyCode', 'currencyName', 'curSelect'];
  dataSource = ELEMENT_DATA;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  skip(){
    this.router.navigate(['login-admin']);
  }
}
