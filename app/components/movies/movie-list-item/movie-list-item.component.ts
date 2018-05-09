import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { Movie } from "../../../models/movie.type";

@Component({
    selector: "movie-list-item",
    templateUrl: "./movie-list-item.component.html"
})
export class MovieListItemComponent implements OnInit {
    constructor() { }

    @Input() movie: Movie;

    ngOnInit() {
    }

}