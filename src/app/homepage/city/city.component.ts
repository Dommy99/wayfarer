import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { CitydataService } from '../citydata.service';
import { Subject } from 'rxjs';

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
  cities: any[] = [];

  constructor(private citydata: CitydataService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../../assets/cityData.json').subscribe(data => {
      this.cities = data[cities];
      // Now this.cities will have the data from your JSON file
    });
  }
}
