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
var tv_show_service_1 = require("../../../services/tv-show.service");
var PopularShowsPageComponent = (function () {
    function PopularShowsPageComponent(tvService) {
        this.tvService = tvService;
        this.currentPage = 1;
        this.maxPages = 0;
    }
    PopularShowsPageComponent.prototype.ngOnInit = function () {
        this.getResults();
    };
    PopularShowsPageComponent.prototype.getResults = function () {
        var _this = this;
        this.shows = this.tvService.getTvShows('popular', { page: this.currentPage });
        this.shows.subscribe(function (r) { return _this.maxPages = r.total_pages; });
    };
    return PopularShowsPageComponent;
}());
PopularShowsPageComponent = __decorate([
    core_1.Component({
        selector: "popular-shows-page",
        templateUrl: "./popular-shows-page.component.html"
    }),
    __metadata("design:paramtypes", [tv_show_service_1.TvShowService])
], PopularShowsPageComponent);
exports.PopularShowsPageComponent = PopularShowsPageComponent;
//# sourceMappingURL=popular-shows-page.component.js.map