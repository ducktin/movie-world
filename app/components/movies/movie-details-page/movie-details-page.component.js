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
var router_1 = require("@angular/router");
var movie_service_1 = require("../../../services/movie.service");
var MovieDetailsPageComponent = (function () {
    function MovieDetailsPageComponent(movieService, route) {
        this.movieService = movieService;
        this.route = route;
    }
    MovieDetailsPageComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getMovie(id);
        this.getMovieCredits(id);
    };
    MovieDetailsPageComponent.prototype.getMovie = function (id) {
        var _this = this;
        var o = this.movieService.getMovie(id);
        o.subscribe(function (m) { return _this.movie = m; });
    };
    MovieDetailsPageComponent.prototype.getMovieCredits = function (id) {
        var _this = this;
        var o = this.movieService.getMovieCredits(id);
        o.subscribe(function (mc) { return _this.movieCredits = mc; });
    };
    return MovieDetailsPageComponent;
}());
MovieDetailsPageComponent = __decorate([
    core_1.Component({
        selector: "movie-details-page",
        templateUrl: "./movie-details-page.component.html"
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        router_1.ActivatedRoute])
], MovieDetailsPageComponent);
exports.MovieDetailsPageComponent = MovieDetailsPageComponent;
//# sourceMappingURL=movie-details-page.component.js.map