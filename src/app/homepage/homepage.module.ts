import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { CitydetailsComponent } from './citydetails/citydetails.component';



@NgModule({
  declarations: [
    AllCitiesComponent,
    CityComponent,
    CitydetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AllCitiesComponent,
    CityComponent,
    CitydetailsComponent
  ]
})
export class HomepageModule { }
