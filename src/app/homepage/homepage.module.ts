import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { CitydetailsComponent } from './citydetails/citydetails.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllCitiesComponent,
    CityComponent,
    CitydetailsComponent,
    PostsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AllCitiesComponent,
    CityComponent,
    CitydetailsComponent,
    PostsComponent,
    
  ]
})
export class HomepageModule { }
