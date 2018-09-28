import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ControllerService } from 'src/app/service/controller/controller.service';
import { AuthenService } from 'src/app/service/authen/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.css']
})
export class LoginAdministratorComponent implements OnInit {

  usernameLogin: string;
  passwordLogin: string;;
  nameLogin: string
  constructor(
    private httpClient: HttpClient,
    private controller: ControllerService,
    private router: Router
  ) {
      this.httpClient.request

  }

  ngOnInit() {

  }

  login() {
    console.log("Checking Username/Password : " + this.usernameLogin + "/*************");
    this.controller.getAdministratorFindByUsername(this.usernameLogin).subscribe(data => {
      if (data.personalPass == this.passwordLogin) {
        AuthenService.setAuthentication(true);
        AuthenService.setNameAdmin(data.personalName);
        AuthenService.setUsername(data.personalUser);
        console.log("Login Success");
        this.router.navigate(['update-rate']);
        this.nameLogin = AuthenService.getNameAdmin();
      } else {
        console.log("Invalid Password");
      }
    });
  }
  logout() {
    console.log("Logout : " + this.usernameLogin)
    if (AuthenService.isAuthentication()) {
      AuthenService.logout();
      this.router.navigate(['login-admin']);
      console.log("Logout Success ")
    }
  }
}
