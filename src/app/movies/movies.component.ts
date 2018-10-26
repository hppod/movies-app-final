import { Movie } from './movie.model';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'mv-movies',
  templateUrl: './movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies: Movie[]

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.movies()
      .subscribe(movies => this.movies = movies)
  }

}
