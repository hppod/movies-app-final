import { MoviesService } from './../movies/movies.service';
import { Movie } from './../movies/movie.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mv-movie-detail',
  templateUrl: './movie-detail.component.html'
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie
  @Output() movieId: string

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.moviesService.movieById(this.route.snapshot.params['id'])
      .subscribe(movie => {
        this.movie = movie,
          JSON.stringify(movie)
        this.movieId = this.movie.id
      })
  }

}
