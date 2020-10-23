import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {StartupSelectSpotModalComponent} from '../../views/startup-select-spot/startup-select-spot-modal/startup-select-spot-modal.component';
import {LoginInfoModalComponent} from '../../views/login/login-info-modal/login-info-modal.component';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  displayBackButton = true;
  routerPath = '';

  constructor(
    private location: Location,
    private router: Router,
    public dialog: MatDialog) {
  }

  previousPage() {
    console.log('Going back');
    this.location.back();
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // Checking if the back button should be displayed
      this.displayBackButton = this.location.path() !== '/login';
      this.routerPath = this.location.path();
    });
  }

  openDialog() {
    console.log(this.routerPath);

    if (this.routerPath === '/login') {
      this.dialog.open(LoginInfoModalComponent);
    }
    if (this.routerPath === '/startup-select-spot') {
      this.dialog.open(StartupSelectSpotModalComponent);
    } else {
      console.log('No modal component added for this view');
    }
  }

}
