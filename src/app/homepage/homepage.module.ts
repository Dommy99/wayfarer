import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllCitiesComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AllCitiesComponent,
    CityComponent
  ]
})
export class HomepageModule { }
