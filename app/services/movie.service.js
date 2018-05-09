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
var http_1 = require("@angular/common/http");
var MovieService = (function () {
    function MovieService(http) {
        this.http = http;
        this.baseUrl = "https://api.themoviedb.org/3";
    }
    MovieService.prototype.getMovies = function (category, options) {
        var url = this.baseUrl + "/movie/" + category;
        var params = new http_1.HttpParams();
        params = (options && options.page) ? params.append('page', '' + options.page) : params;
        return this.http.get(url, { params: params });
    };
    MovieService.prototype.getMovie = function (id) {
        var url = this.baseUrl + "/movie/" + id;
        return this.http.get(url);
    };
    MovieService.prototype.getMovieCredits = function (id) {
        var url = this.baseUrl + "/movie/" + id + "/credits";
        return this.http.get(url);
    };
    return MovieService;
}());
MovieService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map