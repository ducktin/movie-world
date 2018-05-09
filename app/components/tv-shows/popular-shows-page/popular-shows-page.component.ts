import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/rx"; // async
import { SearchResult } from "../../../models/search-result.type";
import { TvShow } from "../../../models/tv-show.type";
import { TvShowService } from "../../../services/tv-show.service";


@Component({
    selector: "popular-shows-page",
    templateUrl: "./popular-shows-page.component.html"
})
export class PopularShowsPageComponent implements OnInit {
    constructor(private tvService: TvShowService) { }

    shows: Observable<SearchResult<TvShow>>;

    currentPage = 1;
    maxPages = 0;

    ngOnInit() {
        this.getResults();
    }

    getResults() {
        this.shows = this.tvService.getTvShows('popular', { page: this.currentPage });
        this.shows.subscribe(r => this.maxPages = r.total_pages);
    }

}