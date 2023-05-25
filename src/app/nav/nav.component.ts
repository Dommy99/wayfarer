import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import cityData from '../../assets/cityData.json';

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
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
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
