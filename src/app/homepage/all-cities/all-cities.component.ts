import { Component } from '@angular/core';

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.css']
})
export class AllCitiesComponent {
  cities = [
    {
      name: 'London',
      country: 'United Kingdom',
      img: '../../assets/images/london.jpg'
    },
    {
      name: 'San Francisco',
      country: 'United States',
      img: '../../assets/images/sanfran.jpg'
    },
    {
      name: 'Sydney',
      country: 'Australia',
      img: '../../assets/images/sydney.jpg'
    },
    {
      name: 'Gibraltar',
      country: 'United Kingdom',
      img: '../../assets/images/cities/gibraltar.jpg'
    }
  ]
}
