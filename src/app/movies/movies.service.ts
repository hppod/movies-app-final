import { MOVIES_API } from './../app.api';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { Movie } from "./movie.model";
import { ErrorHandler } from 'app/app.error-handler';

@Injectable()
export class MoviesService {

    constructor(private http: Http) { }

    movies(): Observable<Movie[]> {
        return this.http.get(`${MOVIES_API}/movies`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    movieById(id: string): Observable<Movie> {
        return this.http.get(`${MOVIES_API}/movies/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    reviewsOfMovie(id: string): Observable<any> {
        return this.http.get(`${MOVIES_API}/movies/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    actorsOfMovie(id: string): Observable<any> {
        return this.http.get(`${MOVIES_API}/movies/${id}/actors`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}