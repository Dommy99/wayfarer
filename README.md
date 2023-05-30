# Wayfarer

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Table of Contents

- [Description](#description)
- [User-Story](#User-Story)
- [Deployment](#deployment)
- [Features](#Features)
- [Hurdles](#Hurdles)
- [Credits](#Credits)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Description
A travel community for users to share city-specific tips ("posts" or "logs") about their favorite locations around the world..

## User-Story
- As a user, I should be able to see a basic splash page with the name of the website.
- As a user, I should be able to See the site-wide header on every page with a link to home page with list of cities.
- As a user, I should be shown a page (at "/cities/1") including:
 -The site-wide header.
 -The name of the city.
 -An iconic photo of the city.
- As a user, I should be shown a list of posts on the City page:
 -Sorted by newest first.
 -With the post titles linked to the individual post "show" pages.
- As a user, I should be able to use the search bar to search through the posts' title and/or content.
- As a user, I should be able to click on the title of one of their posts and be redirected to a "show" page for that post.
- As a user, I should be able to view post "show" pages with title, author, and content.
- A user should be able to:

 -View city pages for "London" and "Gibraltar".
 -A post's title must be between 1 and 200 characters.
 -A post's content must not be empty.
- As a user, I should be able to Call Open Weather API for each city to display the current weather on each city's page.

![Wireframe.](/src/assets/images/wireframes.png)
![Wayfarer.](/src/assets/images/Wayfarer.JPG)

## Features
- Get current weather of the city your are looking at. 
- Responsive UI so you can enjoy on the go.
- See posts about the cities listed.
- Search through all posts.
### Future Features
- Using a city API 
- Dynamic posting
## Hurdles
- Getting the weather api to show on location button clicking.
- Only showing the city data based on which button was clicked.
- Using bootstrap with angular.
- CSS responsivness. 
- Understanding how to import and utilize an internal json file to store our City data. Because we were used to using externally sourced data (like from an API), we initially approached fetching of the data from internal files in a similar way. Come to find out there was no need for any requests to be made, just a simple import of the file assigned to a variable.
- As our application grew, we had some trouble remembering which files/ components pertained to specific data. In the future, it may have helped if we had diagramed our application structure to refer back to as we continued to build
- Using our existing json data and fetches of that data to pass to the Weather API was a challenge. We had to figure out how to use our data interfaces to interpolate the data that would match a proper API call.-
## Credits
- Weather Api [openweathermap](https://openweathermap.org/current)
- Angular docs [angular.io](https://angular.io/)
- Stackoverflow [Stackoverflow](https://stackoverflow.com/questions)
- Bootstrap [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Shout out to Leonardo Rodriguezfor help with bug fixes and code reviews.