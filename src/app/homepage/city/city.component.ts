import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CitydataService } from '../citydata.service';
import { Subject } from 'rxjs';
import * as cityData from '../../../assets/cityData.json';

console.log(cityData);

interface City {
  name: string;
  country: string;
  img: string;
  posts: { title: string; content: string }[];
}

interface CityData {
  cities: City[];
}
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cityTitle: string = '';
  cityCountry: string = '';
  cityImg: string = '';
  posts: Array<string> = [];
  searchSubject = new Subject();
  cities: any = cityData;

  constructor() { }

  ngOnInit(): void {
  }
}
