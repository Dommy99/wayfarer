import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { CityComponent } from './city/city.component';



@NgModule({
  declarations: [
    AllCitiesComponent,
    CityComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
