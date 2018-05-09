import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { SearchService } from "../../services/search.service";
import { SearchResult } from "../../models/search-result.type";
import { MultiSearchResult, MultiSearchMovie } from "../../models/multi.type";


@Component({
    selector: "search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    constructor(private searchService: SearchService) { }

    searchCategories = ["All", "Movie", "Tv", "Person"];
    selectedCategory: "All" | "Movie" | "Tv" | "Person" = "All";

    noResults = true;
    searchTerm = "";
    multiSearchResults: Observable<SearchResult<MultiSearchResult>>;

    currentPage = 1;
    maxPages = 0;

    ngOnInit() {
        this.getResults();
    }

    getResults() {
        if (this.selectedCategory === 'All') {
            this.multiSearchResults = this.searchService
                .getMultiSearchResult({ query: this.searchTerm, page: this.currentPage });
        }
        else {
            this.multiSearchResults = this.searchService
                .getSearchResult(this.selectedCategory, { query: this.searchTerm, page: this.currentPage });
        }
        this.multiSearchResults.subscribe(r => {
            this.noResults = r.total_results === 0 && this.searchTerm.length !== 0;
        });
        this.multiSearchResults.subscribe(r => this.maxPages = r.total_pages);
    }

    // type guards
    isMovie(value: MultiSearchResult): boolean {
        return value.media_type === "movie";
    }

    isTvShow(value: MultiSearchResult): boolean {
        return value.media_type === "tv";
    }

    isPerson(value: MultiSearchResult): boolean {
        return value.media_type === "person";
    }

}