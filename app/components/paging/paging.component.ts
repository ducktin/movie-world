import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";

@Component({
    selector: "paging-component",
    templateUrl: "./paging.component.html"
})
export class PagingComponent implements OnInit {
    constructor() { }

    @Input() currentPage: number;
    @Input() maxPages: number;

    @Output() onNextPage = new EventEmitter();
    @Output() onPrevPage = new EventEmitter();
    nextPageClicked() {
        this.onNextPage.emit(null);
    }
    prevPageClicked() {
        this.onPrevPage.emit(null);
    }

    ngOnInit() {
    }

}