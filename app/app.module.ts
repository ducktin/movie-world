import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app-root/app.component';

import { SearchService } from './services/search.service';
import { MovieService } from './services/movie.service';
import { TvShowService } from './services/tv-show.service';
import { OverviewPipe } from './pipes/overview.pipe';
import { TMDBAuth3Interceptor } from './interceptors/tmdbauth3.interceptor';
import { MovieDetailsPageComponent } from './components/movies/movie-details-page/movie-details-page.component';
import { TvShowDetailsPageComponent } from './components/tv-shows/tv-show-details-page/tv-show-details-page.component';
import { PersonDetailsPageComponent } from './components/people/person-details-page/person-details-page.component';
import { MovieListItemComponent } from './components/movies/movie-list-item/movie-list-item.component';
import { TvShowListItemComponent } from './components/tv-shows/tv-show-list-item/tv-show-list-item.component';
import { PersonListItemComponent } from './components/people/person-list-item/person-list-item.component';

import { PopularMoviesPageComponent } from './components/movies/popular-movies-page/popular-movies-page.component';
import { PopularShowsPageComponent } from './components/tv-shows/popular-shows-page/popular-shows-page.component';
import { TopRatedMoviesPageComponent } from './components/movies/top-rated-movies-page/top-rated-movies-page.component';
import { TopRatedShowsPageComponent } from './components/tv-shows/top-rated-shows-page/top-rated-shows-page.component';
import { SearchComponent } from './components/search/search.component';
import { PersonService } from './services/person.service';
import { PagingComponent } from './components/paging/paging.component';

// kihívás: service keresés (map)
// kihívás: pipe, interceptor

let routes: Route[] = [
  { path: "", redirectTo: "/search", pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "movie/popular", component: PopularMoviesPageComponent },
  { path: "show/popular", component: PopularShowsPageComponent },
  { path: "movie/top", component: TopRatedMoviesPageComponent },
  { path: "show/top", component: TopRatedShowsPageComponent },
  { path: "movie/:id", component: MovieDetailsPageComponent },
  { path: "show/:id", component: TvShowDetailsPageComponent },
  { path: "person/:id", component: PersonDetailsPageComponent },
];

@NgModule({
  declarations: [
    OverviewPipe,
    AppComponent,
    PagingComponent,
    SearchComponent,
    PopularMoviesPageComponent,
    PopularShowsPageComponent,
    TopRatedMoviesPageComponent,
    TopRatedShowsPageComponent,
    MovieDetailsPageComponent,
    TvShowDetailsPageComponent,
    PersonDetailsPageComponent,
    MovieListItemComponent,
    TvShowListItemComponent,
    PersonListItemComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    SearchService,
    MovieService,
    TvShowService,
    PersonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TMDBAuth3Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
