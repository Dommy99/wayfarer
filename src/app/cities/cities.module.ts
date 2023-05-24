import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { TopicComponent } from './topic/topic.component';
import { RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeroComponent, TopicComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeroComponent, TopicComponent]
})
export class CitiesModule { }
