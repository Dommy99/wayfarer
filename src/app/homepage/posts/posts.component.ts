import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
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
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  cities: CityData = cityData;
  post?: City;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = params['id']; 
      this.post = this.cities.cities.find(post => post.id === postId); // find posts by id
    });
  }
}
