import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { TvShowService } from "../../../services/tv-show.service";
import { SearchResult } from "../../../models/search-result.type";
import { TvShow } from "../../../models/tv-show.type";


@Component({
    selector: "top-rated-shows-page",
    templateUrl: "./top-rated-shows-page.component.html"
})
export class TopRatedShowsPageComponent implements OnInit {
    constructor(private tvService: TvShowService) { }

    shows: Observable<SearchResult<TvShow>>;


    currentPage = 1;
    maxPages = 0;

    ngOnInit() {
        this.getResults();
    }

    getResults() {
        this.shows = this.tvService.getTvShows('top_rated', { page: this.currentPage });
        this.shows.subscribe(r => this.maxPages = r.total_pages);
    }

}