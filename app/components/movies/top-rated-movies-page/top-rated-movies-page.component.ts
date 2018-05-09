import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { MovieService } from "../../../services/movie.service";
import { SearchResult } from "../../../models/search-result.type";
import { Movie } from "../../../models/movie.type";

@Component({
    selector: "top-rated-movies-page",
    templateUrl: "./top-rated-movies-page.component.html"
})
export class TopRatedMoviesPageComponent implements OnInit {
    constructor(private movieService: MovieService) { }

    movies: Observable<SearchResult<Movie>>;

    currentPage = 1;
    maxPages = 0;

    ngOnInit() {
        this.getResults();
    }

    getResults() {
        this.movies = this.movieService.getMovies('top_rated', { page: this.currentPage });
        this.movies.subscribe(r => this.maxPages = r.total_pages);
    }

}