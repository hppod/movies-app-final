import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from './../../../movies/movie.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MoviesService } from 'app/movies/movies.service';
import { ReviewService } from './review.service';
import { Review } from './review.model';

@Component({
  selector: 'mv-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  @Input() movie: Movie

  reviewForm: FormGroup

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private reviewService: ReviewService,
    private router: Router
  ) { }

  ngOnInit() {
    this.moviesService.movieById(this.route.snapshot.params['id'])
      .subscribe(movie => this.movie = movie),

      this.reviewForm = this.formBuilder.group({
        name: this.formBuilder.control('', [Validators.required]),
        date: this.formBuilder.control('', [Validators.required]),
        comment: this.formBuilder.control('', [Validators.required]),
        rating: this.formBuilder.control('5', [Validators.required])
      })
  }

  sendReview(review: Review) {
    review.movieId = this.movie.id.toString()
    //review.id = Math.random().toString()
    this.reviewService.sendReview(review)
      .subscribe((reviewId: string) => {
        this.router.navigate(['/thank-you'])
      })
  }

}
