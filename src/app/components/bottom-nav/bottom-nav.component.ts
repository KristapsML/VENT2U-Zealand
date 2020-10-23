import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  displayBackButton = true;

  constructor(
    private location: Location,
    private router: Router) {
  }

  previousPage() {
    console.log('Going back');
    this.location.back();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // Checking if the back button should be displayed
      this.displayBackButton = this.location.path() !== '/login';
    });
  }

}
