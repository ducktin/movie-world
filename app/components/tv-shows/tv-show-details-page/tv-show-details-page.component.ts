import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { ActivatedRoute } from "@angular/router";
import { TvShowService } from "../../../services/tv-show.service";
import { TvShow } from "../../../models/tv-show.type";

@Component({
    selector: "tv-show-details-page",
    templateUrl: "./tv-show-details-page.component.html"
})
export class TvShowDetailsPageComponent implements OnInit {
    constructor(
        private tvShowService: TvShowService,
        private route: ActivatedRoute) { }

    tvShow: Observable<TvShow>;

    ngOnInit(): void {
        this.getTvShow();
    }

    getTvShow(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.tvShow = this.tvShowService.getShow(id);
    }

}