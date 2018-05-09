import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { MovieService } from "../../../services/movie.service";
import { Movie, MovieCredits } from "../../../models/movie.type";

@Component({
    selector: "movie-details-page",
    templateUrl: "./movie-details-page.component.html"
})
export class MovieDetailsPageComponent implements OnInit {
    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute) { }

    movie: Movie;
    movieCredits: MovieCredits;

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getMovie(id);
        this.getMovieCredits(id);
    }

    getMovie(id: number): void {
        let o = this.movieService.getMovie(id);
        o.subscribe(m => this.movie = m);
    }

    getMovieCredits(id: number): void {
        let o = this.movieService.getMovieCredits(id);
        o.subscribe(mc => this.movieCredits = mc);
    }

}