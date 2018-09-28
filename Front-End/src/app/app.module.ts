import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { HttpModule} from '@angular/http';
/* Import Material Angular */
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {
  
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { UpdateCurrencyComponent } from './component/update-currency/update-currency.component';
import { LoginAdministratorComponent } from './component/login-administrator/login-administrator.component';
import { HomeComponent } from './component/home/home.component';
import {ControllerService} from 'src/app/service/controller/controller.service';
// import Module for Routes
import { Routes, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';




const appRoutes: Routes = [
  {path:'login-admin' ,   component:LoginAdministratorComponent},
  {path:'update-rate' ,   component:UpdateCurrencyComponent},
  {path:'' , component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateCurrencyComponent,
    LoginAdministratorComponent
    
  ],
  imports: [
    ScrollDispatchModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ControllerService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
