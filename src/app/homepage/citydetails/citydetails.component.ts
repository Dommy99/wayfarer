import { Component } from '@angular/core';

@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.css']
})
export class CitydetailsComponent {
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
  ];
}
