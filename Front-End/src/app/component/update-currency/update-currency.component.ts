import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenService } from '../../service/authen/authen.service';
import { ControllerService } from '../../service/controller/controller.service';

import { FormControl } from '@angular/forms';
import { FormatDateTimeService } from '../../service/format-date-time.service';

interface DialogData {
  currencySelect: any;
  buyPriceInput: string;
  sellPriceInput: string;
  dateReal: string;
}

@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.css']
})
export class UpdateCurrencyComponent implements OnInit {
  private editAndUpdate_btn:string = "Update";
  private editID:string;
  private editStatus:boolean = false;
  private checkedDateReal: boolean = false;
  
  private currencySelect: any;
  private buyPriceInput: number;
  private sellPriceInput: number;
  private dateReal: string;
  private nameLogin: string
  

  private currencys: Array<any>;
  private expansions: Array<any>;
  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private router: Router, private controller: ControllerService, private datePipe: DatePipe,private formatDateTime:FormatDateTimeService) {
    if (AuthenService.isAuthentication() == false) {
      this.router.navigate(['login-admin']);
    } else {
      this.router.navigate(['update-rate']);
    }

  }


  ngOnInit() {
    this.getCurrency();
    this.getExchangeRatesLastToList();
    this.nameLogin = AuthenService.getNameAdmin();
  }

  editRate(id:any){
    this.editStatus = true;
    this.editAndUpdate_btn = "Edit";
    this.editID = id;
    this.controller.getExchangeRate(id+"").subscribe(data => {
      this.currencySelect = data.currency.currencyCode;
      this.buyPriceInput = data.bankNotesBuying;
      this.sellPriceInput = data.bankNotesSelling;
      this.dateReal = data.date;
      console.log("Edit ID " + data.currency.currencyCode,data);

    });
    console.log("Edit ID " + id);
  }

  getCurrency(): void {
    this.controller.getCurrencys().subscribe(data => {
      this.currencys = data;
      console.log(data);
    });
  }
  getExchangeRatesLastToList() {
    this.controller.getExchangeRatesLast().subscribe(data => {
      this.expansions = data;
    })
  }
  
  setDate(){
    if (this.checkedDateReal) {
      this.dateReal = this.datePipe.transform(Date.now(), "yyyy-MM-dd");
      console.log("Date Now : " + this.dateReal);
    } else {
      this.dateReal = this.formatDateTime.formatDate(this.dateReal);
      console.log("Date Select : " + this.dateReal);
    }
  }

  editAndupdateRate() {
    console.log("Creating Exchange Rate Process");
    console.log("Currency : " + this.currencySelect.currencyCode);  
    console.log("Buy/Sell Price : " + this.buyPriceInput+ '/' +this.sellPriceInput);  
    console.log("Date Create : " + this.dateReal);  
    // Call Controller Service : function newCurency()
    if(this.editStatus == true){
      this.controller.putExchangeRate(this.editID,this.buyPriceInput,this.sellPriceInput,this.dateReal).subscribe(
        data => {
          console.log("PUT Request is successful ", data);
          this.snackBar.open('Edit', "Success" ,{duration: 3000});
          this.getExchangeRatesLastToList();
          this.clear();
          this.editAndUpdate_btn = "Update";
          this.editStatus == false;
      },
      error => {
          console.log("Error", error);
          this.snackBar.open('Edit', "Error" ,{duration: 3000});
      }
      );
    }else{
      this.controller.newCurrencyRate(this.buyPriceInput, this.sellPriceInput, this.dateReal, this.currencySelect + "", AuthenService.getUsername()).subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.snackBar.open('New Exchange Rate Success' , this.currencySelect+"",{duration: 3000});
          this.getExchangeRatesLastToList();
          this.clear();
        },
        error => {
          this.snackBar.open('New Exchange Rate Fail', this.currencySelect+"",{duration: 3000});
          console.log("Error", error);
        }
      );
    }
    


  }
  deleteRate(id:any){
    this.controller.deleteExchangeRate(id+"").subscribe(data => {
      console.log("Delete Request is successful ", data);
      this.snackBar.open('Delete', " Success ",{duration: 3000});
      this.getExchangeRatesLastToList();
      this.clear();
    },
    error => {
      this.snackBar.open('Delete', " Error ",{duration: 3000});
      console.log("Delete Error", error);
    });
  }
  clear(){
    this.currencySelect = '';
      this.buyPriceInput = null;
      this.sellPriceInput = null;
      this.dateReal = '';
      this.checkedDateReal =false;
  }

 
  logout() {

    if (AuthenService.isAuthentication()) {
      AuthenService.logout();
      this.router.navigate(['login-admin']);
    }


  }




}
