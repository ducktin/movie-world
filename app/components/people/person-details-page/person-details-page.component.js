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
var person_service_1 = require("../../../services/person.service");
var PersonDetailsPageComponent = (function () {
    function PersonDetailsPageComponent(personService, route) {
        this.personService = personService;
        this.route = route;
    }
    PersonDetailsPageComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get('id');
        this.getPerson(id);
        this.getCombinedCredits(id);
    };
    PersonDetailsPageComponent.prototype.getPerson = function (id) {
        var _this = this;
        var o = this.personService.getPerson(id);
        o.subscribe(function (p) { return _this.person = p; });
        o.subscribe(function (p) { return console.log(p); });
    };
    PersonDetailsPageComponent.prototype.getCombinedCredits = function (id) {
        var _this = this;
        var o = this.personService.getCombinedCredits(id);
        o.subscribe(function (p) { return _this.combinedCredits = p; });
        o.subscribe(function (p) { return console.log(p); });
    };
    return PersonDetailsPageComponent;
}());
PersonDetailsPageComponent = __decorate([
    core_1.Component({
        selector: "person-details-page",
        templateUrl: "./person-details-page.component.html"
    }),
    __metadata("design:paramtypes", [person_service_1.PersonService,
        router_1.ActivatedRoute])
], PersonDetailsPageComponent);
exports.PersonDetailsPageComponent = PersonDetailsPageComponent;
//# sourceMappingURL=person-details-page.component.js.map