import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './cities/hero/hero.component';

const routes: Routes = [
  {
    path: 'cities',
    component: HeroComponent
  },
  {
    path: '',
    component: HeroComponent
  },
  // {
  //   path: 'hompage',
  //   component: HeroComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
