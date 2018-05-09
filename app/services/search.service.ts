import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/rx";
import * as _ from "lodash";
import { SearchResult } from "../models/search-result.type";
import { MultiSearchResult, MultiSearchMovie, MultiSearchTvShow, MultiSearchPerson } from "../models/multi.type";
import { Movie } from "../models/movie.type";

@Injectable()
export class SearchService {
    baseUrl = "https://api.themoviedb.org/3";

    constructor(private http: HttpClient) {
    }

    getFightClub(): Observable<Movie> {
        let url = "https://api.themoviedb.org/3/movie/550";

        return this.http.get<Movie>(url);
    }

    getSearchResult(category: string, options?: { query?: string, page?: number }) {
        category = category.toLowerCase().split(' ')[0];
        let url = this.baseUrl + "/search/" + category;

        let page = (options && options.page) || 1;
        let query = (options && options.query) || '';

        if (query === '') {
            return Observable.of(<SearchResult<MultiSearchResult>>{});
        }

        let params = new HttpParams();
        params = (options && options.query) ? params.append('query', query) : params;
        params = (options && options.page) ? params.append('page', '' + page) : params;

        return this.http.get<SearchResult<MultiSearchResult>>(url, { params: params })
            .map<SearchResult<MultiSearchResult>, SearchResult<MultiSearchResult>>(o => {
                o.results.forEach(r => r.media_type = category);
                return o;
            });
    }

    getMultiSearchResult(options?: { query?: string, page?: number }) {
        let url = this.baseUrl + "/search/multi";

        let page = (options && options.page) || 1;
        let query = (options && options.query) || '';

        if (query === '') {
            return Observable.of(<SearchResult<MultiSearchResult>>{});
        }

        let params = new HttpParams();
        params = (options && options.query) ? params.append('query', query) : params;
        params = (options && options.page) ? params.append('page', '' + page) : params;

        return this.http.get<SearchResult<MultiSearchResult>>(url, { params: params });
    }
}