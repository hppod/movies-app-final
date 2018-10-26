import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mv-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem vindo ao Movies app'

  constructor() { }

  ngOnInit() {
  }

}
