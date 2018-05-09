import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    // this.currentPageTitle = this.router.events
    //   .filter(e => e instanceof NavigationEnd)
    //   .map((() => _.find(["Movies", "Tv"],
    //     t => this.router.isActive('/' + t.toLowerCase(), false))).bind(this))
  }

  title = "Movie World";
  isNavbarCollapsed = true;
  // currentPageTitle: Observable<string>;
}
