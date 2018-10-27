import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from './app.routes';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesService } from './movies/movies.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorsComponent } from './movie-detail/actors/actors.component';
import { ActorComponent } from './movie-detail/actors/actor/actor.component';
import { ReviewsComponent } from './movie-detail/reviews/reviews.component';
import { ReviewComponent } from './movie-detail/reviews/review/review.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    ActorsComponent,
    ActorComponent,
    ReviewsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
