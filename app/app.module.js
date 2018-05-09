"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { HttpModule } from '@angular/http';
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./components/app-root/app.component");
var search_service_1 = require("./services/search.service");
var movie_service_1 = require("./services/movie.service");
var tv_show_service_1 = require("./services/tv-show.service");
var overview_pipe_1 = require("./pipes/overview.pipe");
var tmdbauth3_interceptor_1 = require("./interceptors/tmdbauth3.interceptor");
var movie_details_page_component_1 = require("./components/movies/movie-details-page/movie-details-page.component");
var tv_show_details_page_component_1 = require("./components/tv-shows/tv-show-details-page/tv-show-details-page.component");
var person_details_page_component_1 = require("./components/people/person-details-page/person-details-page.component");
var movie_list_item_component_1 = require("./components/movies/movie-list-item/movie-list-item.component");
var tv_show_list_item_component_1 = require("./components/tv-shows/tv-show-list-item/tv-show-list-item.component");
var person_list_item_component_1 = require("./components/people/person-list-item/person-list-item.component");
var popular_movies_page_component_1 = require("./components/movies/popular-movies-page/popular-movies-page.component");
var popular_shows_page_component_1 = require("./components/tv-shows/popular-shows-page/popular-shows-page.component");
var top_rated_movies_page_component_1 = require("./components/movies/top-rated-movies-page/top-rated-movies-page.component");
var top_rated_shows_page_component_1 = require("./components/tv-shows/top-rated-shows-page/top-rated-shows-page.component");
var search_component_1 = require("./components/search/search.component");
var person_service_1 = require("./services/person.service");
// kihívás: service keresés (map)
// kihívás: pipe, interceptor
var routes = [
    { path: "", redirectTo: "/search", pathMatch: "full" },
    { path: "search", component: search_component_1.SearchComponent },
    { path: "movie/popular", component: popular_movies_page_component_1.PopularMoviesPageComponent },
    { path: "show/popular", component: popular_shows_page_component_1.PopularShowsPageComponent },
    { path: "movie/top", component: top_rated_movies_page_component_1.TopRatedMoviesPageComponent },
    { path: "show/top", component: top_rated_shows_page_component_1.TopRatedShowsPageComponent },
    { path: "movie/:id", component: movie_details_page_component_1.MovieDetailsPageComponent },
    { path: "show/:id", component: tv_show_details_page_component_1.TvShowDetailsPageComponent },
    { path: "person/:id", component: person_details_page_component_1.PersonDetailsPageComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            overview_pipe_1.OverviewPipe,
            app_component_1.AppComponent,
            search_component_1.SearchComponent,
            popular_movies_page_component_1.PopularMoviesPageComponent,
            popular_shows_page_component_1.PopularShowsPageComponent,
            top_rated_movies_page_component_1.TopRatedMoviesPageComponent,
            top_rated_shows_page_component_1.TopRatedShowsPageComponent,
            movie_details_page_component_1.MovieDetailsPageComponent,
            tv_show_details_page_component_1.TvShowDetailsPageComponent,
            person_details_page_component_1.PersonDetailsPageComponent,
            movie_list_item_component_1.MovieListItemComponent,
            tv_show_list_item_component_1.TvShowListItemComponent,
            person_list_item_component_1.PersonListItemComponent,
        ],
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            router_1.RouterModule.forRoot(routes),
            forms_1.FormsModule
        ],
        providers: [
            search_service_1.SearchService,
            movie_service_1.MovieService,
            tv_show_service_1.TvShowService,
            person_service_1.PersonService,
            {
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: tmdbauth3_interceptor_1.TMDBAuth3Interceptor,
                multi: true
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map