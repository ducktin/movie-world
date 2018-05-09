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
var rx_1 = require("rxjs/rx");
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = "https://api.themoviedb.org/3";
    }
    SearchService.prototype.getFightClub = function () {
        var url = "https://api.themoviedb.org/3/movie/550";
        return this.http.get(url);
    };
    SearchService.prototype.getSearchResult = function (category, options) {
        category = category.toLowerCase().split(' ')[0];
        var url = this.baseUrl + "/search/" + category;
        var page = (options && options.page) || 1;
        var query = (options && options.query) || '';
        if (query === '') {
            return rx_1.Observable.of({});
        }
        var params = new http_1.HttpParams();
        params = (options && options.query) ? params.append('query', query) : params;
        params = (options && options.page) ? params.append('page', '' + page) : params;
        return this.http.get(url, { params: params })
            .map(function (o) {
            o.results.forEach(function (r) { return r.media_type = category; });
            return o;
        });
    };
    SearchService.prototype.getMultiSearchResult = function (options) {
        var url = this.baseUrl + "/search/multi";
        var page = (options && options.page) || 1;
        var query = (options && options.query) || '';
        if (query === '') {
            return rx_1.Observable.of({});
        }
        var params = new http_1.HttpParams();
        params = (options && options.query) ? params.append('query', query) : params;
        params = (options && options.page) ? params.append('page', '' + page) : params;
        return this.http.get(url, { params: params });
    };
    return SearchService;
}());
SearchService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], SearchService);
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map