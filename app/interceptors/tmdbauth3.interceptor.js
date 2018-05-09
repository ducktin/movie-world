"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TMDBAuth3Interceptor = (function () {
    function TMDBAuth3Interceptor() {
        this.api_key = '12930ea2755d90c7f3650da3ffae4e3c';
    }
    TMDBAuth3Interceptor.prototype.intercept = function (req, next) {
        if (!req.url.startsWith('https://api.themoviedb.org/3')) {
            return next.handle(req);
        }
        var authReq = req.clone({
            params: req.params.append('api_key', this.api_key)
        });
        return next.handle(authReq);
    };
    return TMDBAuth3Interceptor;
}());
TMDBAuth3Interceptor = __decorate([
    core_1.Injectable()
], TMDBAuth3Interceptor);
exports.TMDBAuth3Interceptor = TMDBAuth3Interceptor;
//# sourceMappingURL=tmdbauth3.interceptor.js.map