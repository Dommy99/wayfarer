import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
cityName: CityData = cityData;
countryCode: string = '';
city?: City;
weather: any;

constructor(private http: HttpClient,private route: ActivatedRoute) { }

findWeather(cityName: string): void {
  this.http
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`
    )
    .subscribe(
      (response) => {
        this.weather = response;
      },
      (error) => {
        console.error(`Failed to get weather data: ${error.message}`);
      }
    );
}


ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cityId = params['id']; 
      this.city = this.cityName.cities.find(city => city.id === cityId); // find city by id
    });
  }
}
