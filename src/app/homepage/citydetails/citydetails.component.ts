import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cityData from '../../../assets/cityData.json';

interface City {
  id: string;
  name: string;
  country: string;
  img: string;
  posts: { id: string; title: string; content: string }[];
}

interface CityData {
  cities: City[];
}

@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.css']
})
export class CitydetailsComponent implements OnInit {
  cities: CityData = cityData;
  city?: City;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cityId = params['id']; 
      this.city = this.cities.cities.find(city => city.id === cityId); // find city by id
    });
  }
}
