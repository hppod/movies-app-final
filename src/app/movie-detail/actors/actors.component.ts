import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../movies/movies.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Actor } from './actor/actor.model';


@Component({
  selector: 'mv-actors',
  templateUrl: './actors.component.html'
})
export class ActorsComponent implements OnInit {

  actor: Observable<Actor[]>

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.actor = this.moviesService.actorsOfMovie(this.route.parent.snapshot.params['id'])
  }

}
