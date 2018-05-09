import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/rx";   // async
import * as _ from "lodash";
import { Person } from "../../../models/person.type";
import { PersonService } from "../../../services/person.service";
import { CombinedCredits } from "../../../models/combined_credits.type";

@Component({
    selector: "person-details-page",
    templateUrl: "./person-details-page.component.html"
})
export class PersonDetailsPageComponent implements OnInit {
    constructor(
        private personService: PersonService,
        private route: ActivatedRoute) { }

    person: Person;
    combinedCredits: CombinedCredits;

    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getPerson(id);
        this.getCombinedCredits(id);
    }

    getPerson(id: number): void {
        let o = this.personService.getPerson(id);
        o.subscribe(p => this.person = p);
        o.subscribe(p => console.log(p));
    }

    getCombinedCredits(id: number): void {
        let o = this.personService.getCombinedCredits(id);
        o.subscribe(p => this.combinedCredits = p);
        o.subscribe(p => console.log(p));
    }

}