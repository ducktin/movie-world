import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { Person } from "../../../models/person.type";

@Component({
    selector: "person-list-item",
    templateUrl: "./person-list-item.component.html"
})
export class PersonListItemComponent implements OnInit {
    constructor() { }

    @Input() person: Person;

    ngOnInit() {

    }

}