import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitydataService {

  constructor(private http: HttpClient) { }

  getCityData() {
    return this.http.get('assets/cityData.json');
  }
}
