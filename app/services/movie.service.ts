import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/rx";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";
import { Movie, MovieCredits } from "../models/movie.type";

@Injectable()
export class MovieService {
    baseUrl = "https://api.themoviedb.org/3";

    constructor(private http: HttpClient) {
    }

    getMovies(category: string, options?: { page?: number }): Observable<SearchResult<Movie>> {
        let url = this.baseUrl + "/movie/" + category;

        let params = new HttpParams();
        params = (options && options.page) ? params.append('page', '' + options.page) : params;

        return this.http.get<SearchResult<Movie>>(url, { params: params });
    }


    getMovie(id: number): Observable<Movie> {
        let url = this.baseUrl + "/movie/" + id;

        return this.http.get<Movie>(url);
    }

    getMovieCredits(id: number): Observable<MovieCredits> {
        let url = this.baseUrl + "/movie/" + id + "/credits";

        return this.http.get<MovieCredits>(url);
    }
}