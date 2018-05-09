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
var TvShowService = (function () {
    function TvShowService(http) {
        this.http = http;
        this.baseUrl = "https://api.themoviedb.org/3";
    }
    TvShowService.prototype.getTvShows = function (category, options) {
        var url = this.baseUrl + "/tv/" + category;
        var params = new http_1.HttpParams();
        params = (options && options.page) ? params.append('page', '' + options.page) : params;
        return this.http.get(url, { params: params });
    };
    TvShowService.prototype.getShow = function (id) {
        var url = this.baseUrl + "/tv/" + id;
        return this.http.get(url);
    };
    return TvShowService;
}());
TvShowService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], TvShowService);
exports.TvShowService = TvShowService;
//# sourceMappingURL=tv-show.service.js.map