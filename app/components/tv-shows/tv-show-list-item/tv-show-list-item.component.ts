import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { TvShow } from "../../../models/tv-show.type";

@Component({
    selector: "tv-show-list-item",
    templateUrl: "./tv-show-list-item.component.html"
})
export class TvShowListItemComponent implements OnInit {
    constructor() { }

    @Input() tvShow: TvShow;

    ngOnInit() {
    }

}