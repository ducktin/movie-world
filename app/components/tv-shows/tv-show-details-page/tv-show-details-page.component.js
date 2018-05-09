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
var tv_show_service_1 = require("../../../services/tv-show.service");
var TvShowDetailsPageComponent = (function () {
    function TvShowDetailsPageComponent(tvShowService, route) {
        this.tvShowService = tvShowService;
        this.route = route;
    }
    TvShowDetailsPageComponent.prototype.ngOnInit = function () {
        this.getTvShow();
    };
    TvShowDetailsPageComponent.prototype.getTvShow = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.tvShow = this.tvShowService.getShow(id);
    };
    return TvShowDetailsPageComponent;
}());
TvShowDetailsPageComponent = __decorate([
    core_1.Component({
        selector: "tv-show-details-page",
        templateUrl: "./tv-show-details-page.component.html"
    }),
    __metadata("design:paramtypes", [tv_show_service_1.TvShowService,
        router_1.ActivatedRoute])
], TvShowDetailsPageComponent);
exports.TvShowDetailsPageComponent = TvShowDetailsPageComponent;
//# sourceMappingURL=tv-show-details-page.component.js.map