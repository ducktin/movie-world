import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/rx";
import * as _ from "lodash";
import { Person } from "../models/person.type";
import { CombinedCredits } from "../models/combined_credits.type";

@Injectable()
export class PersonService {
    baseUrl = "https://api.themoviedb.org/3";

    constructor(private http: HttpClient) {
    }

    getPerson(id: number): Observable<Person> {
        let url = this.baseUrl + "/person/" + id;

        return this.http.get<Person>(url);
    }

    getCombinedCredits(id: number): Observable<CombinedCredits> {
        let url = this.baseUrl + "/person/" + id + "/combined_credits";

        return this.http.get<CombinedCredits>(url);
    }

}