import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './cities/hero/hero.component';
import { AllCitiesComponent } from './homepage/all-cities/all-cities.component';
import { PostsComponent } from './homepage/posts/posts.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HeroComponent
  },
  {
    path: '',
    component: HeroComponent
  },
  {
    path: 'cities',
    component: AllCitiesComponent
  },
  {
    path: 'cities/:id',
    component: AllCitiesComponent
  },
  {
    path: 'cities/:id/posts/:postId',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
