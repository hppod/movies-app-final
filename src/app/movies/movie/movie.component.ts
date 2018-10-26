import { Movie } from './../movie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mv-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie

  constructor() { }

  ngOnInit() {
  }

}
