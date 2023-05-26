import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import cityData from '../../../assets/cityData.json';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

interface City {
  id: string;
  name: string;
  country: string;
  img: string;
  posts: Post[];
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
  post?: Post;
  allPosts: Post[] = [];
  filteredPosts: Post[] = [];
  searchTerm: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const cityId = params['id'];
      const postId = params['postId'];
      const city = this.cities.cities.find(city => city.id === cityId);
      if (city) {
        this.post = city.posts.find(post => post.id === postId);
      }

      this.allPosts = this.cities.cities.reduce((prev, curr) => {
        return prev.concat(curr.posts);
      }, [] as Post[]);

      this.filteredPosts = [...this.allPosts];
    });
  }

  filterPosts(): void {
    if (!this.searchTerm) {
      this.filteredPosts = [...this.allPosts];
      return;
    }

    this.filteredPosts = this.allPosts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
