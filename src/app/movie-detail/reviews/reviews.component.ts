import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../movies/movies.service';
import { Reviews } from './reviews.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mv-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<Reviews[]>

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.moviesService.reviewsOfMovie(this.route.parent.snapshot.params['id'])
  }

}
