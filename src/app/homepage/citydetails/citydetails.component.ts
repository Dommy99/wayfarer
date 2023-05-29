import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cityData from '../../../assets/cityData.json';
import { HttpClient } from '@angular/common/http';

interface City {
  id: string;
  name: string;
  country: string;
  countryCode: string;
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
  currentTemp: number | undefined;
  currentWeatherDescription: string | undefined;
  weatherData: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cityId = params['id']; 
      this.city = this.cities.cities.find(city => city.id === cityId); // find city by id

      if (this.city) {
        this.getWeather(this.city.name, this.city.countryCode);
      }
    });
  }

  // call api to get weather data
  getWeather(city: String, countryCode: string) {
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
    .subscribe(response => {
            this.weatherData = response;
            this.currentTemp = this.weatherData.main.temp;
            this.currentWeatherDescription = this.weatherData.weather[0].description;
          });
  }
}
