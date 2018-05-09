"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var search_service_1 = require("../../services/search.service");
var SearchComponent = (function () {
    function SearchComponent(searchService) {
        this.searchService = searchService;
        this.searchCategories = ["All", "Movie", "Tv", "Person"];
        this.selectedCategory = "All";
        this.noResults = true;
        this.searchTerm = "";
        this.currentPage = 1;
        this.maxPages = 0;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    SearchComponent.prototype.getResults = function () {
        var _this = this;
        if (this.selectedCategory === 'All') {
            this.multiSearchResults = this.searchService
                .getMultiSearchResult({ query: this.searchTerm, page: this.currentPage });
        }
        else {
            this.multiSearchResults = this.searchService
                .getSearchResult(this.selectedCategory, { query: this.searchTerm, page: this.currentPage });
        }
        this.multiSearchResults.subscribe(function (r) {
            _this.noResults = r.total_results === 0 && _this.searchTerm.length !== 0;
        });
        this.multiSearchResults.subscribe(function (r) { return _this.maxPages = r.total_pages; });
    };
    // type guards
    SearchComponent.prototype.isMovie = function (value) {
        return value.media_type === "movie";
    };
    SearchComponent.prototype.isTvShow = function (value) {
        return value.media_type === "tv";
    };
    SearchComponent.prototype.isPerson = function (value) {
        return value.media_type === "person";
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: "search",
        templateUrl: "./search.component.html"
    }),
    __metadata("design:paramtypes", [search_service_1.SearchService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map