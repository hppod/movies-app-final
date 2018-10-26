import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'movie/:id', component: MovieDetailComponent }
]