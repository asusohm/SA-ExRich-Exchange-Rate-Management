import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ControllerService } from 'src/app/service/controller/controller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private static authentication:boolean = false;
  private static nameAdmin:string = '';
  private static username:string;
  constructor() { }

  public static setAuthentication( authentication:boolean):void{
    AuthenService.authentication = authentication;
  }
  public static setNameAdmin(nameAdmin:string):void{
    this.nameAdmin = nameAdmin;
    console.log("Login Name : " + this.nameAdmin)
  }
  public static getNameAdmin():string{
    return this.nameAdmin;
  }
  public static getUsername():string{
    return this.username;
  }
  public static setUsername(username:string){
     this.username = username;
  }

  public static isAuthentication():boolean {
    return AuthenService.authentication;
  }
  public static logout():void{
    this.nameAdmin = '';
    this.setAuthentication(false);
  }
}
