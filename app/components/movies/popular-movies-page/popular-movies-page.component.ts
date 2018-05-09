import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { MovieService } from "../../../services/movie.service";
import { SearchResult } from "../../../models/search-result.type";
import { Movie } from "../../../models/movie.type";

@Component({
    selector: "popular-movies-page",
    templateUrl: "./popular-movies-page.component.html"
})
export class PopularMoviesPageComponent implements OnInit {
    constructor(private movieService: MovieService) { }

    movies: Observable<SearchResult<Movie>>;

    currentPage = 1;
    maxPages = 0;

    ngOnInit() {
        this.getResults();
    }

    getResults() {
        this.movies = this.movieService.getMovies('popular', { page: this.currentPage });
        this.movies.subscribe(r => this.maxPages = r.total_pages);
    }

}