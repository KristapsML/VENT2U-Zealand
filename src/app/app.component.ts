import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vent2u';

  displayTopNav = true;

  constructor(
    private location: Location,
    private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // Checking if the top nav should be displayed
      this.displayTopNav = this.location.path() !== '/login';
    });
  }
}
