import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import cityData from '../../../assets/cityData.json';

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
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.css']
})
export class CitydetailsComponent implements OnInit {
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
