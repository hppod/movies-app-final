import { MOVIES_API } from './../../../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Review } from './review.model';
import { Observable } from 'rxjs';

@Injectable()
export class ReviewService {

    constructor(private http: Http) { }

    sendReview(review: Review): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(`${MOVIES_API}/reviews`, JSON.stringify(review), new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(review => review.id)
    }
}