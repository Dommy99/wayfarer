import { Component } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  cities = [
    {
      name: 'London',
      country: 'United Kingdom',
      img: '../../../assets/images/london.jpg'
    },
    {
      name: 'San Francisco',
      country: 'United States',
      img: '../../../assets/images/sanfran.jpg'
    },
    {
      name: 'Sydney',
      country: 'Australia',
      img: '../../../assets/images/sydney.jpg'
    },
    {
      name: 'Gibraltar',
      country: 'United Kingdom',
      img: '../../../assets/images/gibraltar.jpg'
    }
  ]
}
