import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/rx";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";
import { TvShow } from "../models/tv-show.type";


@Injectable()
export class TvShowService {
    baseUrl = "https://api.themoviedb.org/3";

    constructor(private http: HttpClient) {
    }

    getTvShows(category: string, options?: { page?: number }): Observable<SearchResult<TvShow>> {
        let url = this.baseUrl + "/tv/" + category;

        let params = new HttpParams();
        params = (options && options.page) ? params.append('page', '' + options.page) : params;

        return this.http.get<SearchResult<TvShow>>(url, { params: params });
    }

    getShow(id: number): Observable<TvShow> {
        let url = this.baseUrl + "/tv/" + id;

        return this.http.get<TvShow>(url);
    }
}