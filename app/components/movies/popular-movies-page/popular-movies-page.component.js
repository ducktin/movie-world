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
var movie_service_1 = require("../../../services/movie.service");
var PopularMoviesPageComponent = (function () {
    function PopularMoviesPageComponent(movieService) {
        this.movieService = movieService;
        this.currentPage = 1;
        this.maxPages = 0;
    }
    PopularMoviesPageComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    PopularMoviesPageComponent.prototype.getResults = function () {
        var _this = this;
        this.movies = this.movieService.getMovies('popular', { page: this.currentPage });
        this.movies.subscribe(function (r) { return _this.maxPages = r.total_pages; });
    };
    return PopularMoviesPageComponent;
}());
PopularMoviesPageComponent = __decorate([
    core_1.Component({
        selector: "popular-movies-page",
        templateUrl: "./popular-movies-page.component.html"
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], PopularMoviesPageComponent);
exports.PopularMoviesPageComponent = PopularMoviesPageComponent;
//# sourceMappingURL=popular-movies-page.component.js.map