import { Actor } from './actor.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mv-actor',
  templateUrl: './actor.component.html'
})
export class ActorComponent implements OnInit {

  @Input() actor: Actor

  constructor() { }

  ngOnInit() {
  }

}
